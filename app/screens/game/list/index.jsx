import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GameCard from '../../../components/game/card/index';

const games = [
  { id: '1', title: 'The Legend of Zelda', genre: 'Adventure' },
  { id: '2', title: 'Super Mario Bros', genre: 'Platformer' },
  { id: '3', title: 'Minecraft', genre: 'Sandbox' },
  { id: '4', title: 'Cyberpunk 2077', genre: 'RPG' },
];

export default function GameList() {
  const renderItem = ({ item }) => (
    <GameCard title={item.title} genre={item.genre} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
});
