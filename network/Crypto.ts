import axios from 'axios';
import {  Response } from '../interfaces/crypto';
import { PriceResponse } from '../interfaces/price';
import { TagResponse } from '../interfaces/tags';
import { fetch } from './Fetch';

class Crypto {
  static getCryptoList(): Promise<Response> {
    return fetch.get(`/wallet/supportedCurrencies`);
  }

  static getCryptoPriceChanges(): Promise<PriceResponse> {
    return fetch.get(`/trade/price-changes`);
  }

  static getMarketTags (): Promise<TagResponse> {
    return axios.get('https://content.pintu.co.id/market-tags?language.name=ID&_sort=order:ASC');
  }

  static getCryptoListByTag (tag: string): Promise<TagResponse> {
    return axios.get(`https://content.pintu.co.id/market-tags?slug_eq=${tag}&language.name=ID`);
  }
}

export default Crypto;
