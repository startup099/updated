const path = require('path');
const express = require('express');
const shopController = require('../controllers/greatone');
const router = express.Router();


router.get('/james', shopController.getIndex);

router.get('/products', shopController.getProducts);




router.delete('/product/:id', shopController.deleteProduct)
router.put('/product/:id', shopController.updateStatus)


module.exports = router;
