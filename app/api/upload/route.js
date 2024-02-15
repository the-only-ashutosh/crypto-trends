const {NextResponse} = require('next/server')

const connect = require('../../../services/admin');

const {fetchAllCoins, updateDatabase} = require('@/services/fetchData');

export const revalidate = 0;

export async function GET(req) { 
    return NextResponse.json(await fetchAllCoins());
}

export async function POST(req){
    await connect();
    const body = JSON.parse(await req.json());
    await updateDatabase(body);
    return NextResponse.json({message:'Done!'});
}