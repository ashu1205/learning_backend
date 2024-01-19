// const express=require('express');
import express from "express";
const app=express();

app.listen(4000,()=>{
    console.log('server started at port 4000');
})

//next() => is used to set the point of execution to next callback

// middlewares => any operation needed to be performed between request and response like 
// authentication and authorisation 

app.get('/about',(req,res,next)=>{
    console.log('first callback');
    // res.send('pro')
    next();
}, (req,res)=>{
    console.log('second callback');
    res.send('running successfully ');
})

// import / export => 
// 1 way --> const path = require('./path')  => old way
// 2nd way --> import path from path => new ES6 way 

// const {name ,add}=require('./script'); --> will work

import {name,add} from './script.js'  
// ----> SyntaxError: Cannot use import statement outside a module

// --> reason => cannot use import statements in  .js , .cjs extension file 
// --> 1 ) use .mjs extension  

console.log(name);

console.log(add(5,6));


// --> 2 ) babel setup => converts modern JS into native JS 
//  because all browsers dont understand modern Js
// how to ? => 1) install dependency 
//  make a babel.config.json 
//      babel/core 
//      babel/cli 
//      babel/preset-env => {
//      "preset":[ 
//       "@babel/preset-env"
// ]
// }
// 3) define type="module" in package.json 
