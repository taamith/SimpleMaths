import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {colors} from '@core/theme/colors';
import {useAppSelector} from '@shared/hooks/reduxHooks';

export const ProfileScreen = () => {
  const profile = useAppSelector(state => state.auth.profile);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Parent / Teacher Control Panel</Text>
      <Text style={styles.text}>User: {profile?.name ?? 'Guest User'}</Text>
      <Text style={styles.text}>Role: {profile?.role ?? 'Not signed in'}</Text>
      <Text style={styles.text}>Authentication, authorization and learning data are fully service driven.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16
  },
  heading: {
    color: colors.textPrimary,
    fontWeight: '800',
    fontSize: 22,
    marginBottom: 10
  },
  text: {
    color: colors.textSecondary,
    fontSize: 15,
    marginBottom: 8
  }
});
