import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet } from 'react-native';

import FrontPage2 from './FrontPage2';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import OnionScanApp from './DashboardScreen';
import LibraryScreen from './LibraryScreen';
import ResultScreen from './ResultScreen';
import ScannedScreen from './ScannedScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DashboardTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconUrl;

          if (route.name === 'Home') {
            iconUrl = 'https://i.imghippo.com/files/djZr7927bcc.png';
          } else if (route.name === 'Library') {
            iconUrl = 'https://i.imghippo.com/files/XQpb8089Wh.png';
          } else if (route.name === 'Scanned') {
            iconUrl = 'https://i.imghippo.com/files/af4988vpg.png';
          } else if (route.name === 'Profile') {
            iconUrl = 'https://i.imghippo.com/files/KhBO4140svs.png';
          }

          return (
            <Image
              source={{ uri: iconUrl }}
              style={[styles.icon, { tintColor: color }]}
            />
          );
        },
        tabBarActiveTintColor: '#4A0D67',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          backgroundColor: '#fff',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={OnionScanApp} options={{ headerShown: false }} />
      <Tab.Screen name="Library" component={LibraryScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Scanned" component={ScannedScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FrontPage">
        <Stack.Screen
          name="FrontPage"
          component={FrontPage2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ title: 'Forgot Password' }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{ title: 'Pest Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
