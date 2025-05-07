import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';

export default function FrontPage({ navigation }) {
  const handleImagePress = () => {
    Linking.openURL('https://imagesupload.xyz/muBLtGaKHGQ8atk');
  };

  return (
    <View style={styles.container}>
      {/* Clickable Logo */}
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={{ uri: 'https://imagesupload.xyz/ib/ChQK1dJw9e4CYyE_1746557168.png' }}
          style={styles.logo}
        />
      </TouchableOpacity>
      <Text style={styles.appName}>OnionScan</Text>

      {/* Main Image */}
      <Image
        source={{ uri: 'https://imagesupload.xyz/ib/ChQK1dJw9e4CYyE_1746557168.png' }}
        style={styles.mainImage}
      />

      {/* Navigation Buttons */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F6FF',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A0D67',
    marginBottom: 20,
  },
  mainImage: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#4A0D67',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
