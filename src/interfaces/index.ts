export interface IUsers {
  id?: number;
  username: string;
  vocation: string;
  password?: string;
  level: number;
}
  
export interface IProducts{
  name: string;
  amount: string;
  id?: number;
}

export interface IOrders{
  id: number;
}