import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useState } from 'react';
import { FlatList, ListRenderItem, RefreshControl, StyleSheet, View } from 'react-native';
import { useQuery } from 'react-query';

import CryptoItem from '../../components/CryptoItem';
import MarketTagHeader from '../../components/MarketTagHeader';
import { CryptoCoin } from '../../interfaces/crypto';
import { TagResponse } from '../../interfaces/tags';
import { StackParamList } from '../../navigators/MarketNavigator';
import Crypto from '../../network/Crypto';
import colors from '../../themes/colors';
import useMarket from '../Market/useMarket';

type Props = NativeStackScreenProps<StackParamList, 'MarketByTag'>;

const MarketByTag = ({ route }: Props) => {
  const { title } = route.params;
  const { data, getPrice, handleRefetch, isCoinDelisted, refresh } =
    useMarket();

  const [coinsByTag, setCoinsByTag] = useState<CryptoCoin[]>();

  const { data: marketTag } = useQuery('market-by-tag', () => Crypto.getCryptoListByTag(title), {
    onSuccess: ({ data: marketByTagData }) => {
      const cryptoIntersection = data?.filter((value) => marketByTagData[0].currencies.some((val) => val.name === value.currencySymbol))
      setCoinsByTag(cryptoIntersection);
    }
  })

  const renderItemSeparator = useCallback(() => {
    return <View style={styles.divider} />;
  }, [data]);

  const renderItem: ListRenderItem<CryptoCoin> = ({ item }) => {
    if (!isCoinDelisted(item)) {
      return <CryptoItem coin={item} price={getPrice(item)} />;
    }
    return <></>;
  };

  const renderHeaderComponent = useCallback(() => <MarketTagHeader marketTag={marketTag as TagResponse} />, [marketTag])

  const keyExtractor = (item: CryptoCoin) => item.name;

  return (
    <FlatList
      data={coinsByTag}
      style={styles.list}
      ListHeaderComponent={renderHeaderComponent}
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

export default MarketByTag;
