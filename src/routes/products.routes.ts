import { Router } from 'express';
import productsController from '../controllers/products.controller';

const router = Router();
// console.log('router', router.post('/', productsController.insertProduct));

router.post('/', productsController.insertProduct);
export default router;
