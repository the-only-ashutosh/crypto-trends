
import GraphPage from "@/components/Graph/GraphPage";
import { fetchGraphPlots } from "@/services/fetchData";
import React from "react";


export const revalidate = 0;

export default async function Graph(props){
    let coinName = String(props.params.coin).includes("%20")? props.params.coin.split('%20') : props.params.coin;
    if(typeof coinName === "object"){
        coinName.forEach((ele,i)=>{
            if(i > 0){
                coinName += " "+ele;
            }else{
                coinName = ele;
            }
        })
    }

    const data = await fetchGraphPlots({name:coinName,timeBound:props.searchParams})

    return <div style={{display:'flex',justifyContent:'center'}}>
        <GraphPage imgs={data}/>
    </div>
}