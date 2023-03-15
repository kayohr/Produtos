import { Request, Response } from 'express';
import ordersService from '../services/orders.services';

const listingOrders = async (_req: Request, res: Response) => {
  // const products = req.body;
  
  const orders = await ordersService.listingAllOrders();
  return res.status(200).json(orders);
};

export default {
  listingOrders,
  
};