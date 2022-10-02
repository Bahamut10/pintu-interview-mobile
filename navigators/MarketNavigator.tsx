import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SearchBar from '../components/Searchbar';
import SortButton from '../components/SortButton';
import MarketByTag from '../screens/MarketByTag';
import Home from '../screens';

export type StackParamList = {
  Home: undefined
  MarketByTag: { title: string }
}

const Stack = createStackNavigator<StackParamList>();

const MarketNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: '',
          headerLeft: () => <SearchBar />,
          headerRight: () => <SortButton />,
          headerStyle: {
            shadowOpacity: 0,
          },
        }}
      />
      <Stack.Screen
        name="MarketByTag"
        component={MarketByTag}
        options={{
          title: '',
          headerTitle: '',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default MarketNavigator;
