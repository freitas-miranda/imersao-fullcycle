package entity

type OrderQueue struct {
	Orders []*Order
}

// Verifica se o preço de j é menor que o i
func (oq *OrderQueue) Less(i, j int) bool {
	return oq.Orders[i].Price < oq.Orders[j].Price
}

// Inverter o valor de i e de j
func (oq *OrderQueue) Swap(i, j int) {
	oq.Orders[i], oq.Orders[j] = oq.Orders[j], oq.Orders[i]
}

// Retornar a quantide de ordens
func (oq *OrderQueue) Len() int {
	return len(oq.Orders)
}

// Adicionar uma orden na fila
func (oq *OrderQueue) Push(x interface{}) {
	oq.Orders = append(oq.Orders, x.(*Order))
}

// Retirar o último elemento das ordens
func (oq *OrderQueue) Pop() interface{} {
	old := oq.Orders
	n := len(old)
	item := old[n-1]
	oq.Orders = old[0 : n-1]

	return item
}

func NewOrderQueue() *OrderQueue {
	return &OrderQueue{}
}
