const express=require('express')
const app=express();

app.set('view engine','ejs')
app.set('views','./views')

app.use(express.static('public'))



const userRoutes=require('./routes/userRoutes')
//mount api's
app.use('/api/',userRoutes);


//start server
app.listen(8080,()=>{
    console.log('server started at port no 4000');
})

