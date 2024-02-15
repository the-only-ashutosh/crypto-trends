'use server';

const mongoose = require('mongoose');

const coinChartSchema = new mongoose.Schema({
    volume:{
        type:Number,
        require:true
    },
    price:{
        type:Number,
        require:true
    },
    time:{
        type:Number,
        require:true,
    },
    name:{
        type:String,
        require:true,
    }
});

module.exports = mongoose.models.CoinChart || mongoose.model('CoinChart',coinChartSchema);