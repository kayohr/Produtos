import { ResultSetHeader } from 'mysql2';
import { IUsers } from '../interfaces';
import connection from './connection';

const createUser = async (user: IUsers): Promise<IUsers> => {
  const { username, vocation, password, level } = user;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(`
    INSERT INTO Trybesmith.users (username, vocation, password, level) VALUES (?, ?, ?, ?)
      `, [username, vocation, password, level]);
      
  //   const [insertId] = result;
  // console.log('model', { userId: insertId, ...product });
    
  return { id: insertId, ...user };
};

const userModel = { createUser };
export default userModel;