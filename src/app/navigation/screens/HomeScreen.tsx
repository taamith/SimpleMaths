import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {colors} from '@core/theme/colors';
import {KidCard} from '@shared/components/KidCard';
import {GradeSelector} from '@modules/learning/components/GradeSelector';
import {useLearning} from '@modules/learning/useLearning';

export const HomeScreen = () => {
  const {selectedGrade, todaysActivities, updateGrade, refreshActivities} = useLearning();

  useEffect(() => {
    refreshActivities();
  }, [refreshActivities]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Today’s Learning Journey</Text>
      <Text style={styles.description}>
        Interactive CBSE + ICSE activities designed for UKG, Grade 1 and Grade 2 children.
      </Text>

      <GradeSelector selectedGrade={selectedGrade} onSelect={updateGrade} />

      {todaysActivities.map(activity => (
        <KidCard
          key={activity.id}
          title={activity.title}
          subtitle={`${activity.type} • ${activity.estimatedMinutes} mins • ${activity.points} points`}
        />
      ))}

      <View style={styles.footerNote}>
        <Text style={styles.footerText}>All modules are configurable from centralized content and APIs.</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  content: {
    padding: 16
  },
  heading: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: '800'
  },
  description: {
    color: colors.textSecondary,
    marginTop: 8,
    marginBottom: 14,
    fontSize: 15
  },
  footerNote: {
    marginTop: 8,
    borderRadius: 10,
    backgroundColor: '#E9F3FF',
    padding: 12
  },
  footerText: {
    color: colors.textSecondary,
    fontSize: 13
  }
});
