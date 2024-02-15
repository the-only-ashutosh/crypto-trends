'use server';

import axios from 'axios';

const connect = require('./admin');

const coins = require('../lib/coinlistSchema');
const coincharts = require('../lib/coinchartSchema');

export async function fetchAllCoins(){
    await connect();
    return await coins.find()
    .then(data=>{
        return JSON.parse(JSON.stringify(data));
    });
}

export async function fetchCoinChart({name,query}){
    await connect();
    let body; 
    if(Object.keys(query).length > 0){
        body = await coincharts.find({name:name,time:{$gte:query.startTime, $lte:query.endTime}}).sort({time:'asc'})
        .then(data=>{
            return JSON.parse(JSON.stringify(data));
        });
    }else{
        body = await coincharts.find({name:name}).sort({time:'asc'})
        .then(data=>{
            return JSON.parse(JSON.stringify(data));
        });
    }
    const imgUrl = await coins.find({name:name})
    .then(data=>{
        return JSON.parse(JSON.stringify(data));
    });
    return {info:imgUrl,content:body};
}

export async function updateDatabase(body){
    await connect();
    body.forEach(async (element) => {
        const coinOb = await coins.find({name:element.name});
        if(coinOb[0].startTime === 0){
            await coins.updateOne({name:element.name},{...coinOb,startTime:element.time,endTime:element.time})
            await coincharts.create(element);
        }else{
            await coins.updateOne({name:element.name},{...coinOb,endTime:element.time})
            await coincharts.create(element);
        }
    });
}

export async function fetchGraphPlots({name,timeBound}){
    await connect();
    const body = await coincharts.find({name:name,time:{$gte:timeBound.startTime, $lte:timeBound.endTime}}).sort({time:'asc'})
    .then(data=>{
        return JSON.parse(JSON.stringify(data));
    }).then(data=>{
        return data.map(ele=>{
            return{price:ele.price,time:ele.time,volume:ele.volume};
        })
    });
    const response = await axios.post('https://asia-south1-crypto-trends-python.cloudfunctions.net/generate-graph',body)
    /*const finalForm = {time:[],price:[],volume:[]}
    body.forEach(ele=>{
        const date = new Date(ele.time*1000)
        let n = date.toLocaleString("en-IN", {
            timeZone:'Asia/Kolkata',
            hour: '2-digit',
            minute: '2-digit'
        });
        finalForm.time.concat(n);
        finalForm.price.concat(ele.price);
        finalForm.volume.concat(ele.volume);
    })*/
    return response.data.map(ele=>decodeURI(ele));
}