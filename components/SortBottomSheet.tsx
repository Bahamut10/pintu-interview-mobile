import React, { forwardRef } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Dropdown, Radio } from 'react-native-magnus';
import { useMarketContext } from '../contexts/MarketContext';

import colors from '../themes/colors';
import {
  AtoZIcon,
  GainersIcon,
  LosersIcon,
  SortIcon,
  ZtoAIcon,
} from './common/Icon';

interface Props {
  closeDropdown: Function
  setOption: Function
}

const SortBottomSheet = forwardRef<any, Props>((props, ref) => {
  const { closeDropdown, setOption } = props;
  const { sortOption: contextSortOption, setSortOption } = useMarketContext();

  const sortOption = [
    {
      id: 1,
      icon: <SortIcon fill={colors.charcoalBlack} />,
      title: 'Default',
    },
    {
      id: 2,
      icon: <GainersIcon fill={colors.charcoalBlack} />,
      title: 'Gainers (24 Jam)',
    },
    {
      id: 3,
      icon: <LosersIcon fill={colors.charcoalBlack} />,
      title: 'Losers (24 Jam)',
    },
    {
      id: 4,
      icon: <AtoZIcon fill={colors.charcoalBlack} />,
      title: 'Asset Name (A - Z)',
    },
    {
      id: 5,
      icon: <ZtoAIcon fill={colors.charcoalBlack} />,
      title: 'Asset Name (Z - A)',
    },
  ];

  const handleRadioChange = (val: any) => {
    closeDropdown();
    setSortOption(val);
    setOption(sortOption.filter((opt) => opt.id === val)[0]);
  };

  const renderSortOption = () =>
    sortOption.map((option) => {
      return (
        <Radio
          key={option.title}
          style={styles.option}
          value={option.id}
          activeColor={colors.doraemonBlue}
          prefix={
            <>
              {option.icon}
              <Text style={styles.optionText}>{option.title}</Text>
            </>
          }
          children={undefined}
        />
      );
    });

  return (
    <Dropdown
      ref={ref}
      title={<Text style={styles.dropdownTitle}>Sort By</Text>}
      mt="sm"
      pb="sm"
      pt="sm"
      px="lg"
      showSwipeIndicator={true}
      roundedTop="xl"
    >
      <Radio.Group
        value={contextSortOption}
        onChange={handleRadioChange}
      >
        {renderSortOption()}
      </Radio.Group>
    </Dropdown>
  );
});

const styles = StyleSheet.create({
  dropdownTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  option: {
    flexDirection: 'row',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: colors.stormWhite,
    marginVertical: 7,
    width: '100%',
  },
  optionText: {
    flex: 1,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default SortBottomSheet;
