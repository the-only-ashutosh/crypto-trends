'use server';

const mongoose = require('mongoose');

const pass = 'IbCiZAoHZ9DvnXT8';
const uri = `mongodb+srv://ashutoshnebe:${pass}@crypto-cluster-one.zlzchho.mongodb.net/crypto-data?retryWrites=true&w=majority`;

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

mongoose.connection.once('on',()=>{
    console.log('Connected to Mongodb');
})

async function connect() {
    if(cached.conn){
        return cached.conn;
    }else{
        return await mongoose.connect(uri);
    }
}


module.exports = connect;
