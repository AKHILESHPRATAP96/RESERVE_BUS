let mongoose=require('mongoose')
require('dotenv').config()

const connectionDB= async ()=>{
    try{
        await mongoose.connect(process.env.URI,{ useNewUrlParser: true, useUnifiedTopology: true })
        console.log('connected to mongo db')
    }
    catch(error){
        console.log(error)
    }
}

module.exports=connectionDB