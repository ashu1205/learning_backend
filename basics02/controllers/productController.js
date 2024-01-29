function showHome(req,res){
    res.render('home.ejs',{name:"ashutosh"})
}

module.exports={showHome};