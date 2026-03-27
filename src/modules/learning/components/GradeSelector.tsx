import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {Grade} from '@core/types/learning';
import {colors} from '@core/theme/colors';

const grades: Grade[] = ['UKG', 'Grade1', 'Grade2'];

interface GradeSelectorProps {
  selectedGrade: Grade;
  onSelect: (grade: Grade) => void;
}

export const GradeSelector = ({selectedGrade, onSelect}: GradeSelectorProps) => {
  return (
    <View style={styles.row}>
      {grades.map(grade => {
        const selected = grade === selectedGrade;
        return (
          <Pressable
            key={grade}
            onPress={() => onSelect(grade)}
            style={[styles.chip, selected && styles.chipSelected]}>
            <Text style={[styles.chipText, selected && styles.chipTextSelected]}>{grade}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 14,
    flexWrap: 'wrap'
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.secondary,
    backgroundColor: '#ffffff'
  },
  chipSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary
  },
  chipText: {
    color: colors.primary,
    fontWeight: '600'
  },
  chipTextSelected: {
    color: '#ffffff'
  }
});
