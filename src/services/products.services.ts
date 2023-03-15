import { IProducts } from '../interfaces';

import productsModel from '../models/products.model';

const addProduct = async (product: IProducts) => {
  const newProductId = await productsModel.creatProduct(product);
  console.log('service', newProductId);
  
  return newProductId;
};

const userService = { addProduct };

export default userService;