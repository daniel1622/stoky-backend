const express = require('express');
const ProductController = require('../controllers/productController');
const router = express.Router();

router.get('/products', ProductController.getAllProducts);
router.get('/products/:id', ProductController.getProductById);

module.exports = router;
