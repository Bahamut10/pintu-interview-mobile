import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import colors from '../../themes/colors';

interface Props {
  title: string
  icon: string
}

const Tag = (props: Props) => {
  const { icon, title } = props;

  return (
    <View style={styles.tag}>
      <SvgUri uri={icon} width={20} height={20} color={colors.charcoalBlack} />
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.stormWhite,
  },
  title: {
    marginLeft: 8
  }
})

export default Tag;
