const express=require('express')
const router=express.Router();

//import controller
const {showData,createTask}=require('../controllers/taskController')


// map apis
router.get('/getAllTask',showData);
router.post('/createTask',createTask)


//export
module.exports=router