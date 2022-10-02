import { storiesOf } from '@storybook/react-native';
import React from 'react';
import SortBottomSheetComponent from '.';

import CenterView from '../CenterView';

storiesOf('SortBottomSheet', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <SortBottomSheetComponent />
  ))
