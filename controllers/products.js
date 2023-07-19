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
  products.push({ title: req.body.title });
  res.redirect('/');
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
