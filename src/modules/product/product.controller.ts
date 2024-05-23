import { Request, Response } from 'express';
import { productService } from './product.service';

const productCreate = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await productService.productCreate(productData);
    // console.log(result);
    res.status(200).json({
      success: true,
      message: 'Product created successfully!!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'could not found',
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProducts();
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully!!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'could not found',
      error: error,
    });
  }
};

const getProductByName = async (req: Request, res: Response) => {
  try {
    const { name } = req.query as { name: string };
    // console.log(name);
    const result = await productService.getProductByName(name);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully by Name!!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'could not found',
      error: error,
    });
  }
};

const getProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    console.log(req.params);
    const result = await productService.getProductById(productId);
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully by Id!!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'could not found',
      error: error,
    });
  }
};

const getUpdateProductById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;

    const result = await productService.getUpdateProductById(
      productId,
      updateData,
    );
    res.status(200).json({
      success: true,
      message: 'Product Update successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'could not found',
      error: error,
    });
  }
};

const productDelete = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    console.log(req.params);
    const result = await productService.productDelete(productId);
    res.status(200).json({
      success: true,
      message: 'Product Deleted successfully!!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'could not found',
      error: error,
    });
  }
};

export const productController = {
  productCreate,
  getAllProducts,
  getProductById,
  getUpdateProductById,
  productDelete,
  getProductByName,
};
