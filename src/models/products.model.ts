import { RowDataPacket } from 'mysql2';
import { IOrders } from '../interfaces';
import connection from './connection';

const creatProduct = async (product: IOrders): Promise<IOrders[]> => {
  const { username, amount } = product;
  const result = await connection.execute<IOrders[] & RowDataPacket[]>(`
  INSERT INTO Trybesmith.products (username, amount) VALUES (?, ?)
    `, [username, amount]);
    
  const [insertId] = result;
  return insertId;
};

const userModel = { creatProduct };
export default userModel;
