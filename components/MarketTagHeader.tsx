import React, { memo } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { TagResponse } from '../interfaces/tags';
import colors from '../themes/colors';

interface Props {
  marketTag: TagResponse
}

const height = Dimensions.get('screen').height * 0.2;

const MarketTagHeader = ({ marketTag }: Props) => {
  return (
    <>
      <ImageBackground style={styles.backgroundImage} source={{ uri: marketTag?.data[0].image.url }}>
        <View style={styles.icon}>
          <SvgUri uri={marketTag?.data[0].icon.url ?? ''} width={20} height={20} color={colors.charcoalBlack} />
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <Text style={styles.title}>{marketTag?.data[0].title}</Text>
        <Text style={styles.description}>{marketTag?.data[0].subtitle}</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
    marginTop: 50
  },
  description: {
    color: colors.smokeGray
  },
  list: {
    backgroundColor: 'white',
  },
  backgroundImage: {
    height,
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 100,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    top: height - 30,
    left: 20,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 18
  }
});

export default memo(MarketTagHeader);
