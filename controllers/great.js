const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('viewsnew/admin/neworder', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};
exports.pendingOrders = (req, res, next) => {

  Product.fetchAll()
    .then(products => {

      let filterd = products.filter(item => item.status == 'pending')

      res.render('viewsnew/admin/pending-orders', {
        prods: filterd,
        pageTitle: 'Pending Orders',
        path: '/admin/pending-orders',
        editing: false
      });
    })

};
exports.approvedOrders = (req, res, next) => {

  Product.fetchAll()
    .then(products => {

      let filterd = products.filter(item => item.status == 'approved')

      res.render('viewsnew/admin/approved-orders', {
        prods: filterd,
        pageTitle: 'Approved Orders',
        path: '/great/approved-orders',
        editing: false
      });
    })

};
exports.completedOrders = (req, res, next) => {

  Product.fetchAll()
    .then(products => {

      let filterd = products.filter(item => item.status == 'completed')

      res.render('viewsnew/admin/completed-orders', {
        prods: filterd,
        pageTitle: 'Completed Orders',
        path: '/great/completed-orders',
        editing: false
      });
    })

};





exports.postAddProduct = (req, res, next) => {


  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;

  const pdfFile = req.file;
  const pdf = `${req.protocol}://${req.get('host')}/${pdfFile.path}`
  const originalName = pdfFile.originalname;



  const product = new Product(title, price, description, imageUrl, pdf);
  product
    .save()
    .then(result => {
      // console.log(result);
      console.log('Created Product');
      // res.send(product)
      res.redirect('/great/products');
    })
    .catch(err => {
      console.log(err);
    });
};
