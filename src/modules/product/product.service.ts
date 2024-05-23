import { TProduct } from './product.interface';
import { product } from './product.model';

const productCreate = async (payload: TProduct) => {
  const result = await product.create(payload);
  return result;
};

const getAllProducts = async () => {
  const result = await product.find();
  return result;
};

const getProductById = async (id: string) => {
  const result = await product.findOne({ _id: id });
  return result;
};

const getUpdateProductById = async (id: string, updateData: any) => {
  const result = await product.findByIdAndUpdate({ _id: id }, updateData);
  return result;
};

const productDelete = async (id: string) => {
  const result = await product.findOneAndDelete({ _id: id });
  return result;
};

const getProductByName = async (name: string) => {
  const regex = new RegExp(name, 'i');
  console.log(regex);
  return await product.find({ name: regex });
};

export const productService = {
  productCreate,
  getAllProducts,
  getProductById,
  getUpdateProductById,
  productDelete,
  getProductByName,
};
