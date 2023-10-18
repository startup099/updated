const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.getProducts);

router.delete('/product/:id', productsController.deleteProduct)
router.put('/product/:id', productsController.updateStatus)


module.exports = router;
