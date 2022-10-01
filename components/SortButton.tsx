import React, { useRef, useState } from 'react';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';

import colors from '../themes/colors';
import { SortIcon } from './common/Icon';
import SortBottomSheet from './SortBottomSheet';

const SortButton = () => {
  const [option, setOption] = useState<any>({
    icon: <SortIcon fill={colors.charcoalBlack} />,
    title: 'Default',
  });
  const dropdownRef = useRef<any>();

  const closeDropdown = () => dropdownRef.current?.close();

  return (
    <Pressable
      style={styles.container}
      onPress={() => dropdownRef.current?.open()}
    >
      {option?.icon}
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.sortOptionText}
      >
        {option?.title}
      </Text>
      <SortBottomSheet
        closeDropdown={closeDropdown}
        setOption={setOption}
        ref={dropdownRef}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginHorizontal: 16,
    marginBottom: Platform.OS === 'android' ? 14 : 6,
    top: Platform.OS === 'android' ? 2 : -2,
    maxWidth: 100,
    borderRadius: 5,
    backgroundColor: colors.semiBlue,
  },
  sortOptionText: {
    fontWeight: 'bold',
    maxWidth: '70%',
  },
});

export default SortButton;
