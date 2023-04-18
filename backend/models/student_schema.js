const mongoose = require('mongoose')

const schema= new mongoose.Schema({
    Sname:{
        type:String,
        required:true,
        trim:true
    },
    Sid:{
        type:String,
        required:true,
        trim:true
    },
    Sbloodtype:{
        type:String,
        required:true,
        trim:true
    },
    Sstandard:{
        type:String,
        required:true,
        trim:true
    },
    Sparentname:{
        type:String,
        required:true,
        trim:true   
    },
    Spassword:{
        type:String,
        required:true,
        trim:true   
    },
    Scount:{
        type:Number,
    },
    Stotal:{
        type:Number,
    }
})

const smodel=mongoose.model('student',schema)

module.exports=smodel;