// components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    padding: 15,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5B8BF7',
    marginBottom: 20,
  },
});

export default Header;
