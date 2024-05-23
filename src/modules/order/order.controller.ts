import { Request, Response } from 'express';
import { orderService } from './order.service';

const orderCreate = async (req: Request, res: Response) => {
  try {
    const orderItem = req.body;
    const result = await orderService.orderCreate(orderItem);
    res.status(200).json({
      success: true,
      message: 'Order created successfully!!',
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

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderService.getAllOrders();
    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!!',
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
const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.query as { email: string };
    const result = await orderService.getOrderByEmail(email);
    res.status(200).json({
      success: true,
      message: 'Order fetched successfully by Email!!',
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

export const orderController = {
  orderCreate,
  getAllOrders,
  getOrderByEmail,
};
