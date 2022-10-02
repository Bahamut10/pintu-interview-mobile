import { storiesOf } from '@storybook/react-native';
import React from 'react';
import TagComponent from '.';

import CenterView from '../CenterView';

storiesOf('Tag', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <TagComponent />
  ))
