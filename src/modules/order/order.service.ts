import { TOrder } from './order.interface';
import { order } from './order.model';

const orderCreate = async (payload: TOrder) => {
  const result = await order.create(payload);
  return result;
};
const getAllOrders = async () => {
  const result = await order.find();
  return result;
};

const getOrderByEmail = async (email: string) => {
  const regex = new RegExp(email, 'i');
  console.log(regex);
  return await order.find({ email: regex });
};

export const orderService = {
  orderCreate,
  getAllOrders,
  getOrderByEmail,
};
