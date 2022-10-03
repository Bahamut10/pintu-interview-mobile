import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Dimensions, FlatList, ListRenderItem, Pressable, StyleSheet, View } from 'react-native';
import { useQuery } from 'react-query';

import { CryptoTag } from '../interfaces/tags';
import Crypto from '../network/Crypto';
import Tag from './common/Tag';

type NavigationProps = {
  MarketByTag: { title: string }
}

const MarketTags = () => {
  const navigation = useNavigation<StackNavigationProp<NavigationProps>>();
  const { data } = useQuery('market-tags', () => Crypto.getMarketTags());

  const slug = (item: CryptoTag) => {
    switch (item.title.toLowerCase()) {
      case 'nft/gaming': return 'gaming';
      case 'terbaru': return 'new';
      case 'ekosistem stablecoin': return 'stablecoin';
      default: return item.title.toLowerCase();
    }
  }

  const renderItem: ListRenderItem<CryptoTag> = ({ item }) => {
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

  const renderSeparator = () => (
    <View style={styles.separator} />
  )

  const keyExtractor = (item: CryptoTag) => item.id.toString();

  return (
    <FlatList
      data={data?.data}
      style={styles.list}
      contentContainerStyle={styles.content}
      ItemSeparatorComponent={renderSeparator}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      horizontal
    />
  )
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width,
    // marginRight: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
  separator: {
    width: 8,
  }
});

export default MarketTags;
