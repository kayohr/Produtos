export interface IUsers {
  id?: number;
  username: string;
  vocation: string;
  password?: string;
  level: number;
}
  
export interface IProducts extends IUsers {
  amount: string;
  orderId: number;
}

export interface IOrders extends IProducts{
  userId: number;
}