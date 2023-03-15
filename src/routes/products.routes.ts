import { Router } from 'express';
import productsController from '../controllers/products.controller';

const router = Router();
// 

router.post('/', productsController.insertProduct);
router.get('/', productsController.newListingProducts);

export default router;
