'use server';

const mongoose = require('mongoose');

const coinListSchema = new mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    startTime:{
        type:Number,
        default:0
    },
    endTime:{
        type:Number,
        default:0
    }

});

module.exports = mongoose.models.Coin ||mongoose.model('Coin',coinListSchema);