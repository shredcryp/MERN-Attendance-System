const mongoose=require('mongoose')


const schema= new mongoose.Schema({
    Tname:{
        type:String,
        required:true,
        trim:true
    },
    Tid:{
        type:String,
        required:true,
        trim:true
    },
    Tsubject:{
        type:String,
        required:true,
        trim:true
    },
    Tpassword:{
        type:String,
        required:true,
        trim:true
    }
})

const tmodel=mongoose.model('teacher',schema)

module.exports = tmodel;