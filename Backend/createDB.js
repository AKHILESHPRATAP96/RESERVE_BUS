
const places=require('./model/State_districModel')
const bus=require('./model/busModal')
const busData=require('./data/bus_data')
const State_districData=require('./data/state_district_data')
const connectionDB=require('./db/connection')

async function create(){
  try{  connectionDB()
    await bus.insertMany(busData)
   await places.insertMany(State_districData)
   
   console.log("Data is inserted")
  }
  catch (error) {
    console.error("Error inserting data:", error);
  }
}
create()