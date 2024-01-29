const express=require('express');

const app=express();

app.listen(4000,()=>{
    console.log('server started at port 4000');
})

//mounting api's
const productRoutes=require('./routes/productRoutes.js');

app.use('/api/',productRoutes);



// to display content on client side => 
// so we use view engine to run "templating languages"
// view engine => machine to run "templating languages"  like ejs ,handlabs
app.set('view Engine','hbs' ,'ejs')
app.set('views',"./views")