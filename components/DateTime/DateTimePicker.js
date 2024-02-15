'use client';

import React,{useState} from 'react';
import { Card } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

import DateTimeLower from './DateTimeLower';
import DateTimeUpper from './DateTimeUpper';
import CoinDropdown from './CoinDropdown';
import { Text } from 'react-ui';
import Link from 'next/link';

const StyledText = styled(Text)(
    () => `
    font-family: 'IBM Plex Sans',sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 150ms ease;
  cursor: pointer;
  background: #fff;
  border: 1px solid #DAE2ED;
  color: #1C2025;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);`
);

const StyledButton = styled(Button)(
    ()=>`
    font-family: 'IBM Plex Sans',sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 5.8px;
    `
)

export default function DateTimePicker({coinList,page}){
    const [bound,setBound] = useState({startTime:0,endTime:0,disabled:true,coinName:'No Coin'});
    const [finalTime,setFinalTime] = useState({startTime:0,endTime:0});

    const selectCoin = (index)=>{
        setFinalTime({startTime:coinList[index].startTime,endTime:coinList[index].endTime});
        setBound({startTime:coinList[index].startTime,endTime:coinList[index].endTime,disabled:false,coinName:coinList[index].name})
    }

    const upperTriggered = (val)=>{
        setFinalTime({...finalTime,endTime:Date.parse(val['$d'])/1000})
    }

    const lowerTriggered = (val)=>{
        setFinalTime({...finalTime,startTime:Date.parse(val['$d'])/1000})
    }
    
    return <Card style={{marginTop:5,marginBottom:5,paddingBottom:5,paddingTop:5,maxWidth:'75%',alignItems:'center',marginLeft:'12.5%',marginRight:'12.5%'}}>
        <div style={{display:'flex',justifyContent:'space-between',marginTop:5,marginRight:'5%',marginLeft:'5%',width:'90%',marginBottom:5}}>
            <StyledText>{bound.coinName}</StyledText>
            <CoinDropdown list={coinList} listener={selectCoin}/>
        </div>
        <DateTimeLower timestamp={bound} lowerChanged={lowerTriggered}/>
        <DateTimeUpper timestamp={bound} upperChanged={upperTriggered}/>
        <div style={{marginTop:10,marginBottom:10,marginRight:'5%',justifyContent:'flex-end',display:'flex'}}>
            <StyledButton disabled={bound.disabled} variant="contained">
                {page === 'filter' && <Link href={{pathname:`/${bound.coinName}`,query:finalTime}} style={{textDecoration:'none',color:bound.disabled?'#1976d2':'white'}}>Load</Link>}
                {page === 'graph' && <Link href={{pathname:`/graph/${bound.coinName}`,query:finalTime}} style={{textDecoration:'none',color:bound.disabled?'#1976d2':'white'}}>Generate</Link>}
            </StyledButton>
        </div>
    </Card>
}