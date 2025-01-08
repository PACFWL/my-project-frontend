import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TechInfoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Technologies Used</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Auths')}>
        <Text style={styles.linkText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  linkText: {
    color: '#007BFF',
  },
});

export default TechInfoScreen;
