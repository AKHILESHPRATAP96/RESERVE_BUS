const mongoose=require('mongoose')
let busSchema=new mongoose.Schema({
    
        name: {
            type:String
        },
        category: {
            type:String,
            default:'ordinary'
        },
        totalSeats: {
            type:Number
        },
        totalWindowSeatsAvailable: {
            type:Number
        },
        rating: {
            type:Number,
            default:4.5
        },
        animeties: [String]
        

})

let BusModel=mongoose.model("bus",busSchema)

module.exports=BusModel