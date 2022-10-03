// export { default } from './storybook';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastProvider } from 'react-native-toast-notifications';

import { MarketContextProvider } from './contexts/MarketContext';
import MarketNavigator from './navigators/MarketNavigator';

const queryClient = new QueryClient();

export default function App () {
  return (
    <ToastProvider>
      <QueryClientProvider client={queryClient}>
        <MarketContextProvider>
          <StatusBar style="auto" />
          <NavigationContainer>
            <MarketNavigator />
          </NavigationContainer>
        </MarketContextProvider>
      </QueryClientProvider>
    </ToastProvider>
  );
}
