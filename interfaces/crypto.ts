export interface Response {
  code: string,
  message: string,
  payload: CryptoCoin[];
}

export interface CryptoCoin {
  currencyGroup: string,
  color: string,
  currencySymbol: string,
  name: string,
  logo: string,
  decimal_point: number,
  listingDate: Date,
  wallets: Wallet[];
}

export interface Wallet {
  currencyGroup: string,
  tokenSymbol: string,
  decimal_point: number,
  tokenType: string,
  blockchain: string,
  explorer: string,
  listingDate: Date,
  blockchainName: string,
  logo?: string,
}
