import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from "react-query";
import { MarketContextProvider } from "./contexts/MarketContext";

import MarketNavigator from './navigators/MarketNavigator';

const queryClient = new QueryClient();

export default function App() {
  return (
    <MarketContextProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="auto" />
        <NavigationContainer>
          <MarketNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </MarketContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
