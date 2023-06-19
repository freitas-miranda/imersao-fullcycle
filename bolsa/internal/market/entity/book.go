package entity

import (
	"container/heap"
	"sync"
)

type Book struct {
	Orders        []*Order
	Transactions  []*Transaction
	OrdersChan    chan *Order
	OrdersChanOut chan *Order
	Wg            *sync.WaitGroup
}

func NewBook(orderChan chan *Order, orderChanOut chan *Order, wg *sync.WaitGroup) *Book {
	return &Book{
		Orders:        []*Order{},
		Transactions:  []*Transaction{},
		OrdersChan:    orderChan,
		OrdersChanOut: orderChanOut,
		Wg:            wg,
	}
}

func (b *Book) Trade() {
	buyOrders := NewOrderQueue()
	sellOrders := NewOrderQueue()

	heap.Init(buyOrders)
	heap.Init(sellOrders)

	for order := range b.OrdersChan {
		var inputOrderQueue *OrderQueue
		var outputOrderQueue *OrderQueue

		if order.OrderType == "BUY" {
			inputOrderQueue = buyOrders
			outputOrderQueue = sellOrders
		} else if order.OrderType == "SELL" {
			inputOrderQueue = sellOrders
			outputOrderQueue = buyOrders
		}

		inputOrderQueue.Push(order)

		if outputOrderQueue.Len() > 0 && outputOrderQueue.Orders[0].Price <= order.Price {
			lastOrder := outputOrderQueue.Pop().(*Order)

			if lastOrder.PendingShares > 0 {
				transaction := NewTransaction(lastOrder, order, order.Shares, lastOrder.Price)
				b.AddTransaction(transaction, b.Wg)

				lastOrder.AddTransaction(transaction)
				order.AddTransaction(transaction)

				b.OrdersChanOut <- lastOrder
				b.OrdersChanOut <- order

				if lastOrder.PendingShares > 0 {
					outputOrderQueue.Push(lastOrder)
				}
			}
		}
	}
}

func (b *Book) AddTransaction(transaction *Transaction, wg *sync.WaitGroup) {
	defer wg.Done()

	sellingShares := transaction.SellingOrder.PendingShares
	buyingShares := transaction.BuyingOrder.PendingShares

	minShares := sellingShares
	if buyingShares < minShares {
		minShares = buyingShares
	}

	transaction.SellingOrder.Investor.UpdateAssetPosition(transaction.SellingOrder.Asset.ID, -minShares)
	transaction.AddSellOrderPendingShares(-minShares)

	transaction.BuyingOrder.Investor.UpdateAssetPosition(transaction.BuyingOrder.Asset.ID, minShares)
	transaction.AddBuyOrderPendingShares(-minShares)

	transaction.CalculateTotal(transaction.Shares, transaction.BuyingOrder.Price)
	transaction.CloseOrders()

	b.Transactions = append(b.Transactions, transaction)
}
