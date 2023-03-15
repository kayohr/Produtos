import { IProducts } from '../interfaces';

import productsModel from '../models/products.model';

const addProduct = async (product: IProducts) => {
  const newProductId = await productsModel.creatProduct(product);
  // console.log('service', newProductId);
  
  return newProductId;
};

const listingAllProducts = async (): Promise<IProducts[]> => {
  const newListingProducts = await productsModel.productListing();
  // console.log('service', newListingProducts);
  
  return newListingProducts;
};

const userService = { addProduct, listingAllProducts };

export default userService;