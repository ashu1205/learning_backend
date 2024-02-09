const userData=require('../models/data');

exports.showUser=(req,res)=>{
    res.render('home.ejs',{userData})
}

exports.showDetail=(req,res)=>{
    const id=req.params.id;

    const user=userData.find((u)=>{id==u.id})

    res.render('singleUser.ejs',user)
}
// module.exports=showUser