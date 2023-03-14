import { Router } from 'express';
import productsController from '../controllers/products.controller';

const router = Router();
export default router;
router.post('/', productsController.insertProduct);
