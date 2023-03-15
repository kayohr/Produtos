import { Request, Response } from 'express';
import createToken from '../auth/authToken';
import userService from '../services/user.services';

const insertUser = async (req: Request, res: Response) => {
  try { 
    const { username, vocation, level, password } = req.body;
    const user = await userService.addUser({ username, vocation, level, password });
    // const user = { id, username, vocation, level, password };
    const token = createToken(user);
    // console.log('controller', user);
  
    return res.status(201).json({ token });
  } catch (e) {
    console.log(e);
  }
};
// const newListingProducts = async (_req: Request, res: Response) => {
//   // const products = req.body;
  
//   const product = await productsService.listingAllProducts();
//   return res.status(200).json(product);
// };

export default {
  insertUser,
};
