const express=require('express')
const app =express()

//middlewares
// app.use(express.urlencoded())
app.use(express.json());


// import routes 
const taskRoutes=require('./routes/taskRoutes')

app.use('/api/',taskRoutes);




app.listen(4000,()=>{
    console.log("server is running at port 4000");

})

app.use(express.static(__dirname+'/static'));

