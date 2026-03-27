import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '@core/theme/colors';

interface KidCardProps {
  title: string;
  subtitle: string;
}

export const KidCard = ({title, subtitle}: KidCardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: {width: 0, height: 2},
    elevation: 2
  },
  title: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '700'
  },
  subtitle: {
    color: colors.textSecondary,
    marginTop: 6,
    fontSize: 14
  }
});
