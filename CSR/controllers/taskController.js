const task=require('../models/data.js')
exports.showData=async(req,res)=>{
    try {
        console.log("DATA FETCHED SUCCESSFULLY");
        res.json(task);

    } catch (error) {
        console.log(error);
    }
}

exports.createTask= (req,res)=>{
    try {
        console.log("entered create task");

        const newTask=req.body;
        const isAdded=task.unshift(newTask);
        console.log(task);
        if(isAdded){
            res.json({
                success:true
            })
        }
        else{
            res.json({
                success:false
            })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            error:error
        })
    }
}

