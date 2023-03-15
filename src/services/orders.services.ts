import { IOrdersProducts } from '../interfaces';

import ordersModel from '../models/orders.model';

const listingAllOrders = async (): Promise<IOrdersProducts[]> => {
  const newListingOrders = await ordersModel.ordersListing();
  return newListingOrders;
};

const userService = { listingAllOrders };

export default userService;