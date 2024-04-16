const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const setSchema = new Schema(
 
    {
        title : { type :String , required : true}
    }

)

module.exports = mongoose.model('todos' , setSchema)