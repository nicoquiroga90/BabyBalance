// styles/styles.js
import { StyleSheet } from 'react-native';

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
  button: {
    backgroundColor: '#5B8BF7',
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5B8BF7',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#5B8BF7',
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

export default styles;
