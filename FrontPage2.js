import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const FrontPage2 = ({ navigation }) => {
  const handleImagePress = () => {
    Linking.openURL('https://imagesupload.xyz/muBLtGaKHGQ8atk');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={{ uri: 'https://imagesupload.xyz/ib/ChQK1dJw9e4CYyE_1746557168.png' }}
          style={styles.logo}
        />
      </TouchableOpacity>
      <Text style={styles.title}>ONIONSCAN</Text>
      <Text style={styles.subtitle}>Mobile Application for Classifying Onion Pests</Text>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.startButtonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FrontPage2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A0D67',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  startButton: {
    backgroundColor: '#FF5CA8',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 30,
  },
  startButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
