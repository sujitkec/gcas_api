const router = require('express').Router();

const {
    addblog,
    updateblog,
    deleteblog
} = require('../controller/blog')

const {
    addproduct,
    updateproduct,
    deleteproduct,
    addAndUpdateTable
} = require('../controller/product')

//blogs
router
    .post('/blog', addblog)
    .patch('/blog', updateblog)
    .delete('/blog/:id', deleteblog)

//products
router
    .post('/product', addproduct)
    .patch('/product', updateproduct)
    .delete('/product/:id', deleteproduct)
    .patch('/producttable/:id', addAndUpdateTable)

module.exports = router;
