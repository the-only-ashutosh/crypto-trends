import React,{Suspense} from 'react';
import List from '@mui/material/List';
import CoinChartItem from './CoinChartItem';

import ProgressBar from '../UI/ProgressBar';

import { fetchCoinChart } from '@/services/fetchData';

const ListContent = ({data})=>{
    const coinInfo = data.info[0];
    const listArr = data.content;
    return listArr.map(ele=>{
        const myKey = ele.volume + ele.time - Math.random()*100000;
        return (
            <CoinChartItem 
            coin_id={coinInfo.id} 
            coin_name={coinInfo.name} 
            coin_img={coinInfo.image} 
            key={myKey}
            volume={ele.volume.toLocaleString("en-IN")}
            time={Math.round(ele.time)}
            rate={ele.price}
            />
        )
    })
}

export default async function CoinChartList(props) {
    
  const coinData = await fetchCoinChart(props.body);

  return (
    <Suspense fallback={<ProgressBar/>}>
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListContent data={coinData}/>
        </List>
    </Suspense>
  )
}
