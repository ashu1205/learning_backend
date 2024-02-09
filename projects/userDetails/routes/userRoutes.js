const express=require('express');
const router=express.Router();

//import controllers
const {showUser,showDetail}=require('../controllers/userController')

//mapping api
router.get('/showUsers',showUser);
router.get('showDetail/:id',showDetail)


//export
module.exports=router