import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('TechInfo');
    }, 5000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/logo-dlsite.png')} style={styles.logo} />
    </View>
  );
};



export default SplashScreen;
