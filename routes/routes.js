import express from 'express';

import { usersignup, userLoginIn } from '../controller/user-controller.js';
import { getProducts, getProductById } from '../controller/ProductController.js';
import { addPaymentGateway, paymentResponse } from '../controller/PaymentController.js';


const router = express.Router();

router.post('/signup', usersignup)
router.post('/login', userLoginIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);

export default router;