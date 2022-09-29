import React, {
  useState, createContext, useContext, ReactNode,
} from 'react';
import { node } from 'prop-types';

interface Props {
  children?: ReactNode;
}

interface ContextType {
  asset: string;
  setAsset: (value: string) => void;
  sortOption: string | number;
  setSortOption: (value: string | number) => void;
}

const initialState = {
  asset: '',
  setAsset: () => {},
  sortOption: 0,
  setSortOption: () => {}
}

const MarketContext = createContext<ContextType>(initialState);

const MarketContextProvider = (props: Props) => {
  const { children } = props;
  const [asset, setAsset] = useState('');
  const [sortOption, setSortOption] = useState<string | number>(1);

  return (
    <MarketContext.Provider
      value={{
        asset,
        setAsset,
        sortOption,
        setSortOption,
      }}
    >
      {children}
    </MarketContext.Provider>
  );
};

const useMarketContext = () => useContext(MarketContext);

export { MarketContextProvider, useMarketContext };
