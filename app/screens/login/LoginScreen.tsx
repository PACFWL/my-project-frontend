// LoginScreen.jsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser } from '../../services/api/index'; 
import styles from './styles';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    setError('');
    try {
      const data = await loginUser(email, password); 
      console.log('Login successful', data);

      // Save the token to AsyncStorage
      await AsyncStorage.setItem('userToken', data.token);

      // Navigate to the next screen after successful login
      navigation.navigate('Initial');
    } catch (error) {
      console.error('Login failed', error);
      setError('Login failed. Please check your credentials.');
    }
  };

  const handleContinueWithoutLogin = () => {
    console.log('Continuing without login');
    // Navigate to the next screen after continuing without login
    navigation.navigate('Initial');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Login</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={handleContinueWithoutLogin}>
        <Text style={styles.linkText}>Continue without logging in</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};
 
export default LoginScreen;
