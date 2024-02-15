import CoinList from "@/components/CoinList/CoinList";
import { fetchAllCoins } from "@/services/fetchData";

export default async function Home() {

  const coinList = await fetchAllCoins();

  return (
    <div>
      <CoinList coinList={coinList}/>
    </div>
  );
}

export const revalidate = 0;
