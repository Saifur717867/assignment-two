import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { productRoute } from './modules/product/product.route';
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', productRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
