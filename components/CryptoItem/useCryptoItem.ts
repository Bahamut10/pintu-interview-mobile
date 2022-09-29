import { useEffect, useState } from "react";

const useCryptoItem = (price: string) => {
  const [prevPrice, setPrevPrice] = useState(Number.NEGATIVE_INFINITY);
  const [upDownStatus, setUpDownStatus] = useState('neutral');
  
  const formatCurrency = (value: number): string | undefined => {
    const isEmpty = +value === 0;
    const isNaN = Number.isNaN(+value);
    if (isEmpty || isNaN) {
      return '-';
    }
    const format = Math.round(value).toString().split('').reverse()
      .join('');
    const convert = format?.match(/\d{1,3}/g);
    const result = convert?.join('.').split('').reverse().join('');
    return result;
  }

  const compareCoinPrice = () => {
    let up = prevPrice < parseInt(price);
    setPrevPrice(parseInt(price))
    setUpDownStatus(up ? 'up' : 'down')
    setTimeout(() => {
      setUpDownStatus('neutral')
    }, 500)
  }

  useEffect(() => {
    compareCoinPrice();
  }, [price]);

  return {
    upDownStatus,
    formatCurrency,
  }
}

export default useCryptoItem;
