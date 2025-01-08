import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const AuthorsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Project Authors</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthorsScreen;
