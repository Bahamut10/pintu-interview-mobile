import React, {
  useState, createContext, useContext, ReactNode,
} from 'react';
import { node } from 'prop-types';

interface Props {
  children?: ReactNode;
}

const initialState = {
  asset: '',
  setAsset: (value: string) => {}
}

const MarketContext = createContext(initialState);

const MarketContextProvider = (props: Props) => {
  const { children } = props;
  const [asset, setAsset] = useState('');

  return (
    <MarketContext.Provider
      value={{
        asset,
        setAsset,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};

const useMarketContext = () => useContext(MarketContext);

export { MarketContextProvider, useMarketContext };
