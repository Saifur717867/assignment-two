import express from 'express';
import { productController } from './product.controller';

const router = express.Router();

router.post('/', productController.productCreate);
router.get('/:productId', productController.getProductById);
router.put('/:productId', productController.getUpdateProductById);
router.delete('/:productId', productController.productDelete);
router.get('/', productController.getProductByName);
router.get('/', productController.getAllProducts);

export const productRoute = router;
