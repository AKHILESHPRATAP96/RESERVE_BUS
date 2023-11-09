const mongoose=require('mongoose')



let placeschema=new mongoose.Schema({
    state:{
        type:String
    },
    districts:{
        type:[String]
    }
})



let PlaceModel=mongoose.model("place",placeschema)

module.exports=PlaceModel