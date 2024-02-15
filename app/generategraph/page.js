import DateTimePicker from "@/components/DateTime/DateTimePicker";
import { fetchAllCoins } from "@/services/fetchData";
import React from "react";

export default async function GraphPage(){

    const coinList = await fetchAllCoins();
    return<div>
        <DateTimePicker page={'graph'} coinList={coinList}/>
    </div>
}


export const revalidate = 0;