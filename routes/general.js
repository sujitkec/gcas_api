const router = require('express').Router();

const {
    login,
} = require('../controller/auth');

const {
    getblogs,
    getblog,
    gettop3
} = require('../controller/blog');

const {
    getproduct,
    getproducts
} = require('../controller/product')


// auth
router
    .post('/login', login)

// blogs
router
    .get('/blogs', getblogs)
    .get('/blog/:id', getblog)
    .get('/top3blogs', gettop3)

// products
router
    .get('/products', getproducts)
    .get('/product/:id', getproduct)

module.exports = router;
