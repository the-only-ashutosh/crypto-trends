const connect = require('./services/admin');

const coins = require('./lib/coinlistSchema');

async function load(){
    await connect();
    await coins.updateMany({},{startTime:0,endTime:0});
}

load();