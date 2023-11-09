const express=require('express');
let router=express.Router()
let place=require('./model/State_districModel')
let bus=require('./model/busModal')
let trip=require('./model/tripModal')
let booking=require('./model/booking')



async function alreadybook(req,res){
    
    let criteria={
        passengerName:req.body.passengerName,
        date:req.body.date
    }
   
    try{
        let isexisting=await booking.findOne(criteria)
        return !!isexisting
    }
    catch(err){
        console.log("error in finding booking",err)
        return false
    }

}




router.route('/').get( async (req,res)=>{
try{
    let places=await place.find({})
    res.json(places)
}
catch{
    console.log("error")   
}
})

router.route('/bus').get( async (req,res)=>{
    try{
        let buses=await bus.find({})
        res.json(buses)
    }
    catch{
        console.log("error")    
    }
    })


    router.route('/trip').post(async (req,res)=>{
        console.log(req.body)
let newTrip=new trip({
    passengerName:req.body.passengerName,
    from:req.body.from,
    to: req.body.to ,
    date:req.body.date,
    fare:req.body.fare,
    busName:req.body.busName,
    seatBook:req.body.seatBook
})


        try{
            let result=await newTrip.save()
            res.json(result)
    console.log(result)
        }
        catch(err){
            console.log("error",err)
        }
        
    })
 
    router.route('/trip').get(async (req,res)=>{
        try{
            let result=await trip.find({}).limit(50)
            res.json(result)
        }
        catch{
            console.log('error')
        }
    })
    router.route('/trip/date').get(async (req, res) => {
        const date = req.query.date;
        
          console.log(date)
        try {
          
          // Get the date from the route parameter
      
          // Find trips that match the specified date
          const result = await trip.find(date );
      
          if (result.length > 0) {
            res.json(result);
          } else {
            res.status(404).json({ message: 'No trips found for the specified date' });
          }
        } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ error: 'An error occurred' });
        }
      });
      

    router.route('/booking').post(async (req,res)=>{
        let newBooking=new booking({
            passengerName:req.body.passengerName,
            from:req.body.from,
            to: req.body.to ,
            date:req.body.date,
            fare:req.body.fare,
            busName:req.body.busName,
            seatBook:req.body.seatBook
        }
        )
        try{
            const isAlreadybook=await alreadybook(req,res)
            if(isAlreadybook){
                res.json("already booked")
            }
            else{
            await newBooking.save()
            res.json(newBooking)
            }
        }
        catch(err) {console.log(err)}
    }
    
    )
    router.route('/booking').get(async (req,res)=>{
        try{
            let result=await booking.find({})
            res.json(result)
        }
        catch{
            console.log('error')
        }
    })












module.exports=router