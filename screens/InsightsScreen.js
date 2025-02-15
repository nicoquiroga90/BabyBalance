 // screens/InsightsScreen.js
import React from 'react';
import { View, Text, ImageBackground, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';

const InsightsScreen = ({ navigation }) => (
  <ImageBackground source={require('../assets/home-background.png')} style={styles.stretchableBackground}>
    <ScrollView style={styles.scrollContainer}>
      <Header title="INSIGHTS" />
      <View style={styles.insightContainer}>
        <Text style={styles.infoTitle}>Hours Slept</Text>
        <Text style={styles.infoText}>Baby woke up more times on Thursday</Text>
      </View>
      <View style={styles.insightContainer}>
        <Text style={styles.infoTitle}>Eating Schedule</Text>
        <Text style={styles.infoText}>Baby's feeding schedule improved last week.</Text>
      </View>
      <View style={styles.insightContainer}>
        <Text style={styles.infoTitle}>Overall Well-being</Text>
        <Text style={styles.infoText}>Baby is more active during the morning hours.</Text>
      </View>
      <Button title="Back to Athena" onPress={() => navigation.navigate('Dashboard')} />
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
  },
  insightContainer: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5B8BF7',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
});

export default InsightsScreen;
