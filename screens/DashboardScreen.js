// screens/DashboardScreen.js
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';

const DashboardScreen = ({ navigation }) => (
  <ImageBackground source={require('../assets/home-background.png')} style={styles.stretchableBackground}>
    <View style={styles.centeredContainer}>
      <Header title="Dashboard" />
      <Text style={styles.welcomeText}>Welcome back, user!</Text>
      <TouchableOpacity style={styles.dashboardButton} onPress={() => navigation.navigate('Insights')}>
        <Text style={styles.dashboardButtonText}>Go to Insights</Text>
      </TouchableOpacity>
      <Button title="Logout" onPress={() => navigation.navigate('Welcome')} />
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  stretchableBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5B8BF7',
    marginBottom: 30,
  },
  dashboardButton: {
    backgroundColor: '#5B8BF7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  dashboardButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
