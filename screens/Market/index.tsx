
import { useCallback, useEffect } from "react";
import { FlatList, ListRenderItem, RefreshControl, StyleSheet, Text, View } from "react-native";

import CryptoItem from "../../components/CryptoItem/CryptoItem";
import { useMarketContext } from "../../contexts/MarketContext";
import { CryptoCoin } from "../../interfaces/crypto";
import colors from "../../themes/colors";
import useMarket from "./useMarket";

const Market = () => {
  const { asset } = useMarketContext();
  const {
    data,
    getPrice,
    handleRefetch,
    isLoading,
    isCoinDelisted,
    refresh,
  } = useMarket(asset);

  const renderItemSeparator = useCallback(() => {
    return <View style={styles.divider} />
  }, [data]);

  const renderItem: ListRenderItem<CryptoCoin> = ({ item }: { item: CryptoCoin }) => {
    if (!isCoinDelisted(item)) {
      return <CryptoItem coin={item} price={getPrice(item)} />
    } return <></>
  };

  if (isLoading) return <Text>Loading...</Text>

  return (
    <FlatList
      data={data}
      style={styles.list}
      ItemSeparatorComponent={renderItemSeparator}
      renderItem={renderItem}
      refreshControl={(
        <RefreshControl
          refreshing={refresh}
          title="Pull to refresh"
          tintColor={colors.gloomyWhite}
          titleColor={colors.gloomyWhite}
          onRefresh={handleRefetch}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
  },
  divider: {
    height: 1,
    backgroundColor: colors.gloomyWhite,
  }
})

export default Market;
