import express from "express"
import cors from 'cors'
import mongoose from 'mongoose'

const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/userdetails',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log("connected")
});

app.get("/",(req,res)=>{
    res.send("call api")
})
 app.listen("/",(req,res)=>{
    console.log("start at port 8000 ")
 })

