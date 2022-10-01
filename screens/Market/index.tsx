import React, { useCallback } from 'react';
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import CryptoItem from '../../components/CryptoItem';
import { CryptoCoin } from '../../interfaces/crypto';
import colors from '../../themes/colors';
import useMarket from './useMarket';

const Market = () => {
  const { data, getPrice, handleRefetch, isLoading, isCoinDelisted, refresh } =
    useMarket();

  const renderItemSeparator = useCallback(() => {
    return <View style={styles.divider} />;
  }, [data]);

  const renderItem: ListRenderItem<CryptoCoin> = ({ item }) => {
    if (!isCoinDelisted(item)) {
      return <CryptoItem coin={item} price={getPrice(item)} />;
    }
    return <></>;
  };

  const keyExtractor = (item: CryptoCoin) => item.name;

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <FlatList
      data={data}
      style={styles.list}
      ItemSeparatorComponent={renderItemSeparator}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          title="Pull to refresh"
          tintColor={colors.gloomyWhite}
          titleColor={colors.gloomyWhite}
          onRefresh={handleRefetch}
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
  },
  divider: {
    height: 1,
    backgroundColor: colors.gloomyWhite,
  },
});

export default Market;
