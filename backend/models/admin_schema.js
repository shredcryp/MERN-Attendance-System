const mongoose=require('mongoose')

const schema= new mongoose.Schema({
    admin:{
        type:String,
        required:true,
        trim:true
    },
    sname:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
})

const amodel=mongoose.model('admin',schema)

module.exports= amodel;