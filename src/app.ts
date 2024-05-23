import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoute } from './modules/product/product.route';
import { orderRoute } from './modules/order/order.route';
const app: Application = express();

// parser here
app.use(express.json());
app.use(cors());

// api here
app.use('/api/products', productRoute);

app.use('/api/orders', orderRoute);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello World!!',
  });
});

export default app;
