import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, StyleSheet, ScrollView } from 'react-native';


const AboutAppScreen = () => {


  return (
    <ScrollView style={[styles.container]}>
      <View style={styles.header}>
        <Image source={require('../../../assets/images/logo.jpeg')} style={styles.logo} />
        <Text style={styles.appName}>App: La Vie</Text>
      </View>
      <Text style={[styles.description]}>
        My Awesome App is designed to make your life easier by providing a suite of powerful tools for managing your tasks, tracking your goals, and staying organized.
      </Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Features:</Text>
        <Text style={styles.feature}>- Task Management</Text>
        <Text style={styles.feature}>- Goal Tracking</Text>
        <Text style={styles.feature}>- Real-time Collaboration</Text>
        <Text style={styles.feature}>- Customizable Notifications</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About the Developers:</Text>
        <Text style={styles.developer}>Jane Doe - Lead Developer</Text>
        <Text style={styles.developer}>John Smith - UI/UX Designer</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us:</Text>
        <Text style={styles.contact}>Email: support@awesomeapp.com</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Follow Us:</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com/awesomeapp')}>
          <Text style={styles.socialLink}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/awesomeapp')}>
          <Text style={styles.socialLink}>Twitter</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Legal:</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://awesomeapp.com/privacy')}>
          <Text style={styles.legalLink}>Privacy Policy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://awesomeapp.com/terms')}>
          <Text style={styles.legalLink}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  feature: {
    fontSize: 16,
    marginBottom: 5,
  },
  developer: {
    fontSize: 16,
    marginBottom: 5,
  },
  contact: {
    fontSize: 16,
    marginBottom: 5,
  },
  socialLink: {
    fontSize: 16,
    color: '#1E90FF',
    marginBottom: 5,
  },
  legalLink: {
    fontSize: 16,
    color: '#1E90FF',
    marginBottom: 5,
  },
});

export default AboutAppScreen;
