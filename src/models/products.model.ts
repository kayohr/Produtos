import { ResultSetHeader } from 'mysql2';
import { IOrders, IProducts } from '../interfaces';
import connection from './connection';

const creatProduct = async (product: IProducts): Promise<IOrders> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
  INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)
    `, [name, amount]);
    
  //   const [insertId] = result;
  console.log('model', { userId: insertId, ...product });
  
  return { id: insertId, ...product };
};

const userModel = { creatProduct };
export default userModel;
