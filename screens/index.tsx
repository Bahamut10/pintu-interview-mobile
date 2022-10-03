import React from 'react';
import { StyleSheet, View } from 'react-native';

import SearchBar from '../components/Searchbar';
import SortButton from '../components/SortButton';
import Market from './Market';

const Home = () => {
  return (
    <>
      <View style={styles.header}>
        <SearchBar />
        <SortButton />
      </View>
      <Market />
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingBottom: 10,
    backgroundColor: 'white',
  }
})

export default Home;
