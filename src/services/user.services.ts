import { IUsers } from '../interfaces';

import userModel from '../models/user.model';

const addUser = async (user: IUsers) => {
  const newUser = await userModel.createUser(user);
  //   console.log('services', newUser);

  return newUser;
};

// const listingAllProducts = async (): Promise<IProducts[]> => {
//   const newListingProducts = await productsModel.productListing();
//   // console.log('service', newListingProducts);
  
//   return newListingProducts;
// };

const userService = { addUser };

export default userService;