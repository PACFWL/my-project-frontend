import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { registerUser } from '../../services/api/index';
import styles from './styles';

const CustomButton = ({ onPress, title, iconName }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    {iconName && <Ionicons name={iconName} size={20} color="white" style={styles.buttonIcon} />}
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const SignupScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async () => {
    setError('');
    const data = new FormData();

    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('password', formData.password);

    if (profileImage && profileImage.uri) {
      const localUri = profileImage.uri;
      const filename = localUri.split('/').pop();
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : `image`;

      data.append('profileImage', {
        uri: localUri,
        name: filename,
        type,
      });
    }

    try {
      const result = await registerUser(data); 

      console.log('Signup successful', result);

      await AsyncStorage.setItem('userToken', result.token);

      navigation.navigate('Initial');
    } catch (error) {
      console.error('Signup failed', error);
      setError(error.message || 'Signup failed. Please check your details.');
    }
  };

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'Permission to access camera roll is required!');
    }
    return status === 'granted';
  };

  const pickImage = async () => {
    const hasPermission = await requestPermission();
    if (!hasPermission) return;

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled && result.assets.length > 0) {
        const pickedImage = result.assets[0];
        setProfileImage(pickedImage);
      } else {
        Alert.alert('Image picking canceled', 'Please try again.');
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'An error occurred while picking the image. Please try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.name}
        onChangeText={(value) => handleChange('name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={formData.email}
        onChangeText={(value) => handleChange('email', value)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(value) => handleChange('password', value)}
      />
      <CustomButton title="Pick Profile Image" onPress={pickImage} iconName="image-outline" />
      {profileImage && (
        <Image source={{ uri: profileImage.uri }} style={styles.image} />
      )}
      <CustomButton title="Signup" onPress={handleSignup} iconName="checkmark-outline" />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};


export default SignupScreen;
