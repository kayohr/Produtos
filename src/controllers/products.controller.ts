import { Request, Response } from 'express';
import productsService from '../services/products.services';

const insertProduct = async (req: Request, res: Response) => {
  const products = req.body;
  
  const product = await productsService.addProduct(products);
  // console.log('controller', product);
  return res.status(201).json(product);
};

const newListingProducts = async (_req: Request, res: Response) => {
  // const products = req.body;
  
  const product = await productsService.listingAllProducts();
  return res.status(200).json(product);
};

export default {
  insertProduct,
  newListingProducts,
};