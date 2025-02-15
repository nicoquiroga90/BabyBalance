// screens/AddProfileScreen.js
import React from 'react';
import { View, Text, TextInput, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';

const AddProfileScreen = ({ navigation }) => (
  <ImageBackground source={require('../assets/background-bubbles.png')} style={styles.stretchableBackground}>
    <View style={styles.centeredContainer}>
      <Header title="Add Profile" />
      <TouchableOpacity style={styles.pictureButton}>
        <Text style={styles.pictureButtonText}>Add Picture</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Relationship" />
      <TextInput style={styles.input} placeholder="Access" />
      <Button title="Confirm Profile" onPress={() => navigation.navigate('Dashboard')} />
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
  pictureButton: {
    borderWidth: 1,
    borderColor: '#D9E2FF',
    borderRadius: 50,
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  pictureButtonText: {
    color: '#5B8BF7',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default AddProfileScreen;
