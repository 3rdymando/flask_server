import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleImagePress = () => {
    Linking.openURL('https://imagesupload.xyz/muBLtGaKHGQ8atk');
  };

  return (
    <View style={styles.container}>
      {/* Logo and App Name */}
      <TouchableOpacity onPress={handleImagePress}>
        <Image
          source={{ uri: 'https://imagesupload.xyz/ib/ChQK1dJw9e4CYyE_1746557168.png' }}
          style={styles.logo}
        />
      </TouchableOpacity>
      <Text style={styles.appName}>OnioScan</Text>

      {/* Title and Login Link */}
      <Text style={styles.title}>Create New Account</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already registered? Login</Text>
      </TouchableOpacity>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#FFF"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#FFF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#FFF"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.button} onPress={() => alert('Account Created')}>
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
    backgroundColor: '#FFFFFF',
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
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A0D67',
    marginBottom: 10,
  },
  link: {
    color: '#6B7280',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    backgroundColor: '#4B6600',
    borderRadius: 10,
    marginBottom: 15,
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FF3BBF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
