// screens/WelcomeScreen.js
import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import Button from '../components/Button';

const WelcomeScreen = ({ navigation }) => (
  <ImageBackground source={require('../assets/background-bubbles.png')} style={styles.stretchableBackground}>
    <View style={styles.centeredContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Image source={require('../assets/logo-placeholder.png')} style={styles.logo} />
      <Button title="GET STARTED" onPress={() => navigation.navigate('CreateAccount')} />
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
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#5B8BF7',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
});

export default WelcomeScreen;
