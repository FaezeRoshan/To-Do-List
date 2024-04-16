const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Dap = express()
const cors = require('cors')
const  todoRoutes = require('./routes/todo-routes')
Dap.use(bodyParser.json())

Dap.use(cors())
Dap.use((req, res, next)=>{
    
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    next()
})



Dap.use('/api/todo' , todoRoutes)


Dap.use('/api/todo/:title',todoRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/todo').then( 
    ()=> {
        Dap.listen(5000)
      
      
    }
).catch(
    err =>{
        console.log(err)
    }
)

