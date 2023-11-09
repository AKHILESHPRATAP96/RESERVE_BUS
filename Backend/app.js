const express=require('express')
const router=require("./router")


require('dotenv').config()
const connectionDB=require('./db/connection')


let app=express()
let PORT=5000
let URI=process.env.URI


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/state',router)


app.get('/',(req,res)=>{
    res.status(200).send(("welcome to Reserve bus service "))
})




connectionDB()
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)  
})
