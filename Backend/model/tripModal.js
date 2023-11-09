const mongoose=require('mongoose')

let trip=new mongoose.Schema({
    passengerName:{
        type:String,
        require:true
    },
    from:{
        type:String,
        require:true
    },
    to:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    fare:{
        type:Number,
        require:true
    },
    busName:{
        type:String,
        require:true
    },
    seatBook:{
        type:String,
        require:true
    }
})
let Trips=mongoose.model('Trip',trip)

module.exports=Trips