import React, { useRef, useState } from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-magnus';

import { SortIcon } from '../../../components/common/Icon';
import SortBottomSheet from '../../../components/SortBottomSheet';
import colors from '../../../themes/colors';

const SortBottomSheetComponent = () => {
  const [option, setOption] = useState<any>({
    icon: <SortIcon fill={colors.charcoalBlack} />,
    title: 'Default',
  });
  const dropdownRef = useRef<any>();
  const closeDropdown = () => dropdownRef.current?.close();

  return (
    <Button
      onPress={() => dropdownRef.current?.open()}
    >
      {option?.icon}
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {option?.title}
      </Text>
      <SortBottomSheet
        closeDropdown={closeDropdown}
        setOption={setOption}
        ref={dropdownRef}
      />
    </Button>
  );
}

export default SortBottomSheetComponent;
