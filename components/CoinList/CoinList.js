'use client';

import React,{Suspense} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import CoinListItem from './CoinListItem';
import ProgressBar from '../UI/ProgressBar'

function ListContent ({data}){
    return <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} bgcolor={'background.paper'}>
        {data.map((ele,i)=>{
            return <Grid xs={2} sm={4} md={4} key={ele.name}>
                <CoinListItem coin={ele}/>
            </Grid>
        })}
    </Grid>
}

export default function CoinList({coinList}) {

    return(
        <Suspense fallback={<ProgressBar/>}>
            <Box sx={{ flexGrow: 1 }}>
                <ListContent data={coinList}/>
            </Box>
        </Suspense>
    )
}
