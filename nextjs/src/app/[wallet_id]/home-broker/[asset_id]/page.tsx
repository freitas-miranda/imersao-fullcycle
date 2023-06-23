import MyOrders from '@/app/components/MyOrders';
import { OrderForm } from '@/app/components/OrderForm';

export default async function HomeBrokerPage({ params }: { params: { wallet_id: string; asset_id: string } }) {
  return (
    <main className="container mx-auto px-2">
      <article className="format format-invert">
        <h1>Home broker - {params.asset_id}</h1>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div>
              <OrderForm wallet_id={params.wallet_id} asset_id={params.asset_id} type="BUY" />
            </div>
            <div>
              <MyOrders wallet_id={params.wallet_id} />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
