const express = require('express')
const app =express()
const cors=require('cors')

const userRouter=require('./Routes/user')
const connectDB = require('./db/db')
const env=require('dotenv')
env.config()

connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',userRouter)

app.listen(8000,(err)=>{
if(err)
    console.log(err)
else
    console.log('server is running at port 7000 ');
})