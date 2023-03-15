import { RowDataPacket } from 'mysql2';
import { IOrdersProducts } from '../interfaces';
import connection from './connection';

const ordersListing = async (): Promise<IOrdersProducts[]> => {
  const [result] = await connection.execute<IOrdersProducts[] & RowDataPacket[]>(`SELECT 
  orders.id, 
  user_id as userId, 
  JSON_ARRAYAGG(products.id) as productsIds
FROM Trybesmith.orders 
INNER JOIN Trybesmith.users 
  ON orders.id = users.id
INNER JOIN Trybesmith.products 
  ON orders.id = products.order_id
  GROUP BY Trybesmith.orders.id
  `);
  return result;
};

const userModel = { ordersListing };
export default userModel;