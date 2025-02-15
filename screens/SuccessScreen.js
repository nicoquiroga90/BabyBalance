// screens/SuccessScreen.js
import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';

const SuccessScreen = ({ navigation }) => (
  <ImageBackground source={require('../assets/background-bubbles.png')} style={styles.stretchableBackground}>
    <View style={styles.centeredContainer}>
      <Header title="Account Created" />
      <Image source={require('../assets/success-icon.png')} style={styles.successImage} />
      <Button title="Continue" onPress={() => navigation.navigate('AddBaby')} />
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
  successImage: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
});

export default SuccessScreen;
