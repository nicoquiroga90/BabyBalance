// screens/RoutineLogsScreen.js
import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Header from '../components/Header';
import { routineData } from '../data/routineLogsData';  // Datos de ejemplo para los logs

const RoutineLogsScreen = ({ navigation }) => (
  <ImageBackground source={require('../assets/home-background.png')} style={styles.stretchableBackground}>
    <ScrollView style={styles.scrollContainer}>
      <Header title="ROUTINE LOGS" />
      <View style={styles.logContainer}>
        {routineData.map((log, index) => (
          <View key={index} style={styles.routineCard}>
            <Text style={styles.infoTitle}>{log.title}</Text>
            <Text style={styles.infoText}>{log.details}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.buttonText}>Back to Athena</Text>
      </TouchableOpacity>
    </ScrollView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  stretchableBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent',
  },
  logContainer: {
    padding: 10,
  },
  routineCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#5B8BF7',
  },
  infoText: {
    fontSize: 16,
    color: '#555',
  },
  backButton: {
    backgroundColor: '#5B8BF7',
    padding: 15,
    borderRadius: 25,
    margin: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default RoutineLogsScreen;
