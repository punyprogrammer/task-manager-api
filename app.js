const express=require('express');
const connectDB=require('./db/connect')
const app=express()
const tasks=require('./routes/tasks')
const notFound =require('./middleware/notFound')
require('dotenv').config()
//middleware
app.use(express.json())
app.use(express.static('./public'))
const port =3000;
app.use('/api/v1/tasks',tasks)
//for handing404 responses
app.use(notFound)
app.get('/',(req,res)=>{
    res.send('Hello')

})
//a function to start the server only if the database is properly connected
const start=async ()=>{
    try {
     await connectDB(process.env.MONGO_URI)
     app.listen(port,console.log(`Server is running at port number ${port}`))
    } catch (error) {
           console.log(error)
    }

}
start()