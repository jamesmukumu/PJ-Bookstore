const express = require('express')
const router = express.Router()
const generateLink = require('../controllers/stripepayment')




//post payment

router.post('/post/payment',generateLink) 










module.exports = router

