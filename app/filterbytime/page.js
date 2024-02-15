import DateTimePicker from '@/components/DateTime/DateTimePicker';
import { fetchAllCoins } from '@/services/fetchData';
import React from 'react';

export default async function FilterPage(){
    const coinList = await fetchAllCoins();
    return <div>
        <DateTimePicker coinList={coinList} page={'filter'}/>
    </div>
}


export const revalidate = 0;