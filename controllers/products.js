const Product = require("../models/product");

const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.gettask = (req, res, next) => {
  res.render('task', {
    pageTitle: 'Add Product',
    path: '/admin/task',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.getThinking = (req, res, next) => {
  res.render('thinking', {
    pageTitle: 'Thinking',
    path: '/admin/thinking',
    formsCSS: true,
    productCSS: true,
    activeThinking: true
  });
};

exports.getNetworth = (req, res, next) => {
  res.render('networth', {
    pageTitle: 'Networth',
    path: '/admin/networth',
    formsCSS: true,
    productCSS: true,
    activeNetworth: true
  });
};

exports.deleteProduct = (req, res, next) => {

  const { id } = req.params

  console.log("founded", id)

  Product.deleteProduct(id)
    .then(() => {
      res.status(200).send({ success: true })
    })
    .catch(err => {
      console.log(err);
    });

  // Product.fetchAll()
  //   .then(products => {
  //     res.render('shop/product-list', {
  //       prods: products,
  //       pageTitle: 'All Products',
  //       path: '/products'
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
};

exports.updateStatus = (req, res, next) => {

  const { id } = req.params

  const { status } = req.body

  console.log(id)
  console.log(status)

  Product.updateStatus(id, status)
    .then(() => {
      res.status(200).send({ success: true })
    })
    .catch(err => {
      console.log(err)
    })
  // next()
};


exports.getAbout = (req, res, next) => {
  res.render('about', {
    pageTitle: 'About',
    path: '/admin/about',
    formsCSS: true,
    productCSS: true,
    activeAbout: true
  });
};

exports.getMoney = (req, res, next) => {
  res.render('money', {
    pageTitle: 'Money',
    path: '/admin/money',
    formsCSS: true,
    productCSS: true,
    activeMoney: true
  });
};

exports.getBusiness = (req, res, next) => {
  res.render('business', {
    pageTitle: 'Business',
    path: '/admin/business',
    formsCSS: true,
    productCSS: true,
    activeBusiness: true
  });
};

exports.postAddProduct = (req, res, next) => {

  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;



  const product = new Product(title, price, description, imageUrl);
  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      // res.send(product)
      res.redirect('/greatone/james');
    })
    .catch(err => {
      console.log(err);
    });

  // products.push({ title: req.body.title });
  // res.redirect('/');
};

exports.getProducts = (req, res, next) => {
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
};
