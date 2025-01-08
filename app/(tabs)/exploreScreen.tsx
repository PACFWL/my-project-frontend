import React from 'react';
import { View, StyleSheet } from 'react-native';
import GameList from '../screens/game/list/index.jsx';

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <GameList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
