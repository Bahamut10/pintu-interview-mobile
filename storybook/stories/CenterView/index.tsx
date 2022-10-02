import React from 'react';
import PropTypes from 'prop-types';
import { StyleProp, View, ViewStyle } from 'react-native';
import style from './style';

export default function CenterView ({ children }: any) {
  return <View style={style.main as StyleProp<ViewStyle>}>{children}</View>;
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
