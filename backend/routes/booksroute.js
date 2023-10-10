const express = require('express')
const router = express.Router()
const {postBooks} = require('../controllers/booksController')
const {getBookontitle} = require('../controllers/booksController')
const {getBooksonCategory} = require('../controllers/booksController')
const  {countallBooks} = require('../controllers/booksController')
const  {countallbooksCategory} = require('../controllers/booksController')
const {deleteBook} = require('../controllers/booksController')
const {getAllbooks} = require('../controllers/booksController')
//post books
router.post('/post/books',postBooks)

//based on title

router.get('/get/basedontitle',getBookontitle)
//get all books
router.get('/allbooks',getAllbooks)


router.get('/get/oncategory',getBooksonCategory)


//count on all books in the db 
router.get('/count/allbooks',countallBooks)


//count books categorywise
router.get('/count/categorywise',countallbooksCategory)



//delete book
router.delete('/deletebook',deleteBook)



module.exports = router

