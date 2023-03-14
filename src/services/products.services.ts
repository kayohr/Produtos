import { IOrders } from '../interfaces';

import productsModel from '../models/products.model';

const addProduct = async (product: IOrders[]) => {
  const newProductId = await productsModel.creatProduct(product[0]);
  //   const newProduct = await modelProducts.getProductsId(newProductId);
  return newProductId;
};

const userService = { addProduct };

export default userService;