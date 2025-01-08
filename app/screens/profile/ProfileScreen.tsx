import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { getUserProfile } from '../../services/api/index';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userProfile = await getUserProfile();
        setUser(userProfile);
      } catch (error) {
        setError('Failed to load user profile');
      }
    };

    fetchUserProfile();
  }, []);

  if (error) {
    return <Text style={styles.error}>{error}</Text>;
  }

  if (!user) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      {user.profileImage && (
        <Image source={{ uri: `data:image/jpeg;base64,${user.profileImage}` }} style={styles.image} />
      )}
      <Text style={styles.text}>Name: {user.name}</Text>
      <Text style={styles.text}>Email: {user.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    marginVertical: 8,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 50,
    marginBottom: 16,
  },
});

export default ProfileScreen;
