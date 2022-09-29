import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useMarketContext } from "../../contexts/MarketContext";
import { delisted } from "../../helpers/delisted";
import { CryptoCoin } from "../../interfaces/crypto";
import { CryptoPrice } from "../../interfaces/price";
import Crypto from "../../network/Crypto";

const useMarket = () => {
  const { asset, sortOption } = useMarketContext();
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

  const getCoin = (price: CryptoPrice): CryptoCoin => (
    coinData?.payload?.filter((data) => data.currencySymbol.toLowerCase() === price.pair.split('/')[0])[0]!
  )

  const isCoinDelisted = (coin: CryptoCoin) => delisted.includes(coin.currencySymbol.toLowerCase());

  const handleTyping = () => {
    if (asset !== '') {
      setData(coinData?.payload?.filter((val) => val.name.toLowerCase().includes(asset!) || val.currencySymbol.toLowerCase().includes(asset!)))
    } else {
      handleSort();
    }
  }

  const handleSortByAssetName = (type: string) => {
    const coins = [...coinData?.payload as CryptoCoin[]];

    if (type === 'asc') {
      coins.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        else return 0;
      })
    } else if (type === 'desc') {
      coins.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
        else if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        else return 0;
      })
    }

    setData(coins);
  }

  const handleSortByGainLose = (type: string) => {
    const price = [...priceData?.payload as CryptoPrice[]];

    if (type === 'gain') {
      price.sort((a, b) => parseFloat(b.day!) - parseFloat(a.day!))
    } else if (type === 'lose') {
      price.sort((a, b) => parseFloat(a.day!) - parseFloat(b.day!))
    }

    const coins = price.map((val) => getCoin(val));
    
    setData(coins)
  }

  const handleSort = () => {
    switch (sortOption) {
      case 2:
        handleSortByGainLose('gain');
        break;
      case 3:
        handleSortByGainLose('lose');
        break;
      case 4:
        handleSortByAssetName('asc');
        break;
      case 5:
        handleSortByAssetName('desc');
        break;
      case 1: 
      default:
        setData(coinData?.payload)
        break;
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

  useEffect(() => {
    handleSort();
  }, [sortOption])

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
