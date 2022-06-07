const express=require("express")
const app=express()

const cors=require("cors")
app.use(cors())
app.use(express.json())


const mongoose=require("mongoose")
const connect=()=>{
    return mongoose.connect("mongodb+srv://Neelam0101:Neelam12345@cluster0.yca2t.mongodb.net/car")
}


const Home_controller=require("./controllers/home.controller")
app.use("/", Home_controller)

const port=process.env.PORT||8080
app.listen(port,async()=>{
    try{
      await connect()
    }
    catch(error){
        console.log(error)
    }
console.log(`listening on port ${port}`)
} )