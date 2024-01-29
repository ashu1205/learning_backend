const express=require('express');
const router=express.Router();

//importing controllers

const {showHome }=require('../controllers/productController.js')


// mapping routes
router.get('/home',showHome);

//export router
module.exports=router;