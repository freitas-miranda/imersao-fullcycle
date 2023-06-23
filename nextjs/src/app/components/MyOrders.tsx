import { Order } from '../models';
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableHeadCell,
  TableRow,
  Badge,
} from '../components/flowbite-components';

import { isHomeBrokerClosed } from '../utils';

//Server Components
async function getOrders(wallet_id: string): Promise<Order[]> {
  const response = await fetch(`http://localhost:8000/wallets/${wallet_id}/orders`, {
    //cache: 'no-store', // processamento sempre dinamico
    next: {
      //revalidate: isHomeBrokerClosed() ? 60 * 60 : 5, // Caso fechado, cache de uma hora, se não 5 segundos
      revalidate: 1, // A cada um segundo
      tags: [`orders-wallet-${wallet_id}`],
    },
  });
  return response.json();
}

// 10 am - 17 18
export default async function MyOrders(props: { wallet_id: string }) {
  const orders = await getOrders(props.wallet_id);
  return (
    <div>
      <article className="format format-invert">
        <h2>Minhas ordens</h2>
      </article>
      <Table className="mt-2">
        <TableHead>
          <TableHeadCell>asset_id</TableHeadCell>
          <TableHeadCell>quant.</TableHeadCell>
          <TableHeadCell>price</TableHeadCell>
          <TableHeadCell>tipo</TableHeadCell>
          <TableHeadCell>status</TableHeadCell>
        </TableHead>
        <TableBody>
          {orders.map((order, key) => (
            <TableRow className=" border-gray-700 bg-gray-800" key={key}>
              <TableCell className="whitespace-nowrap font-medium text-white">{order.Asset.id}</TableCell>
              <TableCell>{order.shares}</TableCell>
              <TableCell>{order.price}</TableCell>
              <TableCell>
                <Badge>{order.type}</Badge>
              </TableCell>
              <TableCell>
                <Badge>{order.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
