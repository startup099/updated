const path = require('path');
const express = require('express');
const multer = require('multer')

const productsController = require('../controllers/products');




const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsController.getAddProduct);

// /admin/about => GET
router.get('/about', productsController.getAbout); // Corrected route path

// /admin/money => GET
router.get('/money', productsController.getMoney);

// /admin/thinking => GET
router.get('/thinking', productsController.getThinking);

// /admin/networth => GET
router.get('/networth', productsController.getNetworth);

// /admin/business => GET
router.get('/business', productsController.getBusiness);

router.get('/task', productsController.gettask);

// /admin/add-product => POST
router.post('/add-product', productsController.postAddProduct);


module.exports = router;
