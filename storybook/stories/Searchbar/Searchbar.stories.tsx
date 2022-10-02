import { storiesOf } from '@storybook/react-native';
import React from 'react';
import SearchBar from '../../../components/Searchbar';

import CenterView from '../CenterView';

storiesOf('SearchBar', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <SearchBar />
  ))
