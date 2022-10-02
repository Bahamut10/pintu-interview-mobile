import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';

import Market from '../../../screens/Market';

import CenterView from '../CenterView';

const queryClient = new QueryClient();

storiesOf('Market', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1, width: '100%', paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
        <Market />
      </SafeAreaView>
    </QueryClientProvider>
  ))
