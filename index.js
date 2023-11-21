


const express=require('express')
const app=express()

app.get("/api/question",(req,res)=>{
    res.send("what is express why we use them ?")
})

app.get("/api/main",(req,res)=>{
    res.send('Express is minimal and flexible node.js web application framework that provides a robust set of features for web and mobile applicaion.')
})

app.listen(3000,()=>{
    console.log("server is running fine")
})