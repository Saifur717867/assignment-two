// import { TInventory } from './../product/product.interface';
// import { product } from '../product/product.model';
import { TOrder } from './order.interface';
import { order } from './order.model';

const orderCreate = async (payload: TOrder) => {
  const result = await order.create(payload);
  return result;
};

// const orderCreate = async (
//   email: string,
//   productId: string,
//   price: number,
//   quantity: number,
// ) => {
//   const Product = await product?.findById(productId);
//   console.log(Product);

//   if (!Product) {
//     throw new Error('Product not found');
//   }

//   if (Product.inventory.quantity < quantity) {
//     throw new Error('Insufficient stock');
//   }
//   const session = await order.startSession();
//   session.startTransaction();

//   try {
//     const Order = new order({ email, productId, price, quantity });
//     await Order.save({ session });

//     Product.inventory.quantity -= quantity;
//     Product.inventory.inStock = Product.inventory.quantity > 0;
//     await Product.save({ session });

//     await session.commitTransaction();
//     session.endSession();

//     return Order;
//   } catch (error) {
//     await session.abortTransaction();
//     session.endSession();
//     throw error;
//   }
// };

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
