// Manage routes/path to productController

import express from 'express';
import ProductController from './product.controller.js';
const router = express.Router();
import upload from '../../../middlewares/fileupload.middleware.js';
const productController = new ProductController();


router.get('/', productController.getAllProducts);
router.post('/',upload.single('imageUrl'),productController.addProduct);
router.get('/:id', productController.getOneProduct);
router.get('/filter',productController.filterProducts);
router.post('/rate', productController.rateProduct);

export default router;
