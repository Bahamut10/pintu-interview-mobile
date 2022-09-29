import React from 'react';
import { Dimensions, StyleSheet, TextInput, View } from 'react-native';

import { useMarketContext } from '../contexts/MarketContext';
import colors from '../themes/colors';

const width = Dimensions.get('screen').width - 150;

const SearchBar = () => {
  const { setAsset } = useMarketContext();
  const handleInput = (value: string) => setAsset(value);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Testing input"
        onChangeText={handleInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 10,
    width,
  },
  input: {
    borderRadius: 5,
    borderWidth: 0.5,
    paddingVertical: 5,
    paddingHorizontal: 8,
    backgroundColor: colors.gloomyWhite,
    color: colors.smokeGray,
    borderColor: colors.gloomyWhite,
    height: 40,
    flex: 1,
  },
});

export default SearchBar;
