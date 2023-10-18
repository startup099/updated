const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const greatRoutes = require('./routes/great');
const greatoneRoutes = require('./routes/greatone');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('./uploads'));

app.use((req, res, next) => {
    // User.findById(1)
    //   .then(user => {
    //     req.user = user;
    //     next();
    //   })
    //   .catch(err => console.log(err));
    next();
  });
  

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use('/great', greatRoutes);
app.use('/greatone', greatoneRoutes);

app.use(errorController.get404);

mongoConnect(() => {
    app.listen(3559)
  });