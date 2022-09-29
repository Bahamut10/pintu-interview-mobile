import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { delisted } from "../../helpers/delisted";
import { CryptoCoin } from "../../interfaces/crypto";
import { CryptoPrice } from "../../interfaces/price";
import Crypto from "../../network/Crypto";

const useMarket = (asset?: string) => {
  const [data, setData] = useState<CryptoCoin[]>();
  const [refresh, setRefresh] = useState(false);

  const { data: coinData, isLoading, refetch: refetchCoin } = useQuery('coin-list', () => Crypto.getCryptoList(), {
    onSuccess: () => setRefresh(false)
  });

  const { data: priceData, refetch: refetchPrice } = useQuery('price-change', () => Crypto.getCryptoPriceChanges(), {
    refetchInterval: 1000,
  });

  const getPrice = (coin: CryptoCoin): CryptoPrice => (
    priceData?.payload?.filter((data) => data.pair.split('/')[0] === coin.currencySymbol.toLowerCase())[0]
  )

  const isCoinDelisted = (coin: CryptoCoin) => delisted.includes(coin.currencySymbol.toLowerCase());

  const handleTyping = () => {
    if (asset !== '') {
      setData(coinData?.payload?.filter((val) => val.name.toLowerCase().includes(asset!) || val.currencySymbol.toLowerCase().includes(asset!)))
    } else {
      setData(coinData?.payload);
    }
  }

  const handleRefetch = () => {
    setRefresh(true)
    refetchCoin();
    refetchPrice();
  }

  useEffect(() => {
    handleTyping();
  }, [asset]);

  useEffect(() => {
    setData(coinData?.payload);
  }, [coinData]);

  return {
    data,
    getPrice,
    handleRefetch,
    isLoading,
    isCoinDelisted,
    refresh,
  }
}

export default useMarket;
