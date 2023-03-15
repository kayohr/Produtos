import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrders, IProducts } from '../interfaces';
import connection from './connection';

const creatProduct = async (product: IProducts): Promise<IOrders> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)
    `, [name, amount]);
    
  //   const [insertId] = result;
  // console.log('model', { userId: insertId, ...product });
  
  return { id: insertId, ...product };
};

const productListing = async (): Promise<IProducts[]> => {
  const [result] = await connection.execute<IProducts[] & RowDataPacket[]>(`SELECT 
  id, name, amount FROM Trybesmith.products`);
  return result;
};

const userModel = { creatProduct, productListing };
export default userModel;
