import React from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View, Text, StyleSheet } from 'react-native';

export default function CGIllustrationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CG+Illustrations Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});