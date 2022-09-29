import {  Response } from '../interfaces/crypto';
import { PriceResponse } from '../interfaces/price';
import { fetch } from './Fetch';

class Crypto {
  static getCryptoList(): Promise<Response> {
    return fetch.get(`/wallet/supportedCurrencies`);
  }

  static getCryptoPriceChanges(): Promise<PriceResponse> {
    return fetch.get(`/trade/price-changes`);
  }
}

export default Crypto;
