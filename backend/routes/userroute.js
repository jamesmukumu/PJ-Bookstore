const express = require('express')
const router = express.Router()
const {postStudent} = require('../controllers/userController')
const {loginStudent} = require('../controllers/userController')
const {countUsers} = require('../controllers/userController')
 const {findUseronusername} = require('../controllers/userController')
  
router.post('/post/student',postStudent)
router.post('/login',loginStudent) 
//count all
router.get('/count/allusers',countUsers)

// get on username
router.get('/get/onusername',findUseronusername)


module.exports = router    