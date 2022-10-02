import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CryptoItemComponent from '.';

import CenterView from '../CenterView';

storiesOf('CryptoItem', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <CryptoItemComponent />
  ))
