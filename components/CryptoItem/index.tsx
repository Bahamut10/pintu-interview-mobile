import React, { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { CryptoCoin } from '../../interfaces/crypto';
import { CryptoPrice } from '../../interfaces/price';
import colors from '../../themes/colors';
import { DownIcon, UpIcon } from '../common/Icon';
import useCryptoItem from './useCryptoItem';

interface Props {
  coin: CryptoCoin
  price: CryptoPrice
}

const CryptoItem = (props: Props) => {
  const { coin, price } = props;
  const { upDownStatus, formatCurrency } = useCryptoItem(price?.latestPrice);

  return (
    <View style={styles.container}>
      <View style={styles.coinIdentity}>
        <SvgUri uri={coin.logo} color={coin.color} width={35} height={35} />
        <View style={styles.coinIdentityWrapper}>
          <Text style={styles.coinName}>{coin.name}</Text>
          <Text style={styles.coinSymbol}>{coin.currencySymbol}</Text>
        </View>
      </View>
      <View style={styles.coinPriceWrapper}>
        <Text
          style={[
            styles.coinPrice,
            styles[upDownStatus as keyof typeof styles],
          ]}
        >
          Rp {formatCurrency(parseInt(price?.latestPrice))}
        </Text>
        <View style={styles.coinMovement}>
          {parseFloat(price?.day ?? '0.00') > 0
            ? (
            <UpIcon fill={colors.lightGreen} style={styles.arrow} />
              )
            : (
            <DownIcon fill={colors.tomatoRed} style={styles.arrow} />
              )}
          <Text
            style={[
              styles.coinName,
              parseFloat(price?.day ?? '0.00') > 0 ? styles.up : styles.down,
            ]}
          >
            {price?.day}%
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  coinIdentity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinIdentityWrapper: {
    justifyContent: 'space-between',
    marginLeft: 8,
  },
  coinName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  coinSymbol: {
    fontSize: 12,
    color: colors.shadowWhite,
  },
  coinPriceWrapper: {
    alignItems: 'flex-end',
  },
  coinPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  coinMovement: {
    flexDirection: 'row',
  },
  arrow: {
    bottom: -2,
  },
  up: {
    color: colors.lightGreen,
  },
  down: {
    color: colors.tomatoRed,
  },
  neutral: {
    color: 'black',
  }
});

export default memo(CryptoItem);
