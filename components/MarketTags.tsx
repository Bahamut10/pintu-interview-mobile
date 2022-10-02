import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { memo } from 'react'
import { FlatList, ListRenderItem, Pressable, StyleSheet } from 'react-native';
import { useQuery } from 'react-query';

import { Datum } from '../interfaces/tags';
import Crypto from '../network/Crypto';
import Tag from './common/Tag';

type NavigationProps = {
  MarketByTag: { title: string }
}

const MarketTags = () => {
  const navigation = useNavigation<StackNavigationProp<NavigationProps>>();
  const { data } = useQuery('market-tags', () => Crypto.getMarketTags());

  const slug = (item: Datum) => {
    switch (item.title.toLowerCase()) {
      case 'nft/gaming': return 'gaming';
      case 'terbaru': return 'new';
      case 'ekosistem stablecoin': return 'stablecoin';
      default: return item.title.toLowerCase();
    }
  }

  const renderItem: ListRenderItem<Datum> = ({ item }) => {
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('MarketByTag', {
            title: slug(item),
          })
        }}>
          <Tag icon={item.icon.url} title={item.title} />
      </Pressable>
    )
  }

  const keyExtractor = (item: Datum) => item.id.toString();

  return (
    <FlatList
      data={data?.data}
      style={styles.list}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      horizontal
    />
  )
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
    paddingVertical: 10,
  },
});

export default memo(MarketTags);
