

import CoinChartList from "@/components/CoinChart/CoinChartList";

export default function ChartPage(props){
    let coinName = String(props.params.coinname).includes("%20")? props.params.coinname.split('%20') : props.params.coinname;
    if(typeof coinName === "object"){
        coinName.forEach((ele,i)=>{
            if(i > 0){
                coinName += " "+ele;
            }else{
                coinName = ele;
            }
        })
    }
    coinName = {name:coinName,query:props.searchParams}
    return <div>
        <CoinChartList body={coinName}/>
    </div>
}

export const revalidate = 0;