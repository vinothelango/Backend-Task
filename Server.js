const express =require('express')
const app = express()
require ('dotenv').config()
const tasks = require ('./routes/Userroutes')
const connectDB = require('./db/Connect')

const cors = require('cors');
app.use(cors());


app.get('/hello',(req,res)=>{
    res.send('TAsk manager ')
})
app.use(express.json());
app.use('/api/v1/tasks',tasks)

const PORT =process.env.PORT || 5000

  

const start = async()=>{
  try {
     await connectDB(process.env.MONGO_URI)
     console.log("Connected Mongo DB")
     app.listen(PORT,()=>{
  console.log(`Server is running on ${PORT}...`)})
  } catch (error) {
    console.log(error)
  }
 
}
start()