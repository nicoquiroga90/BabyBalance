// screens/CreateAccountScreen.js
import React from 'react';
import { View, Text, TextInput, ImageBackground, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';

const CreateAccountScreen = ({ navigation }) => (
  <ImageBackground source={require('../assets/background-bubbles.png')} style={styles.stretchableBackground}>
    <View style={styles.centeredContainer}>
      <Header title="Create an Account" />
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      <Button title="Create Account" onPress={() => navigation.navigate('Success')} />
      <Text style={styles.textLink} onPress={() => navigation.goBack()}>Already have an account? Login Now</Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#D9E2FF',
    borderRadius: 20,
    padding: 10,
    width: '80%',
    marginBottom: 15,
    backgroundColor: '#FFF',
  },
  textLink: {
    color: '#5B8BF7',
    fontSize: 14,
    marginTop: 10,
  },
});

export default CreateAccountScreen;
