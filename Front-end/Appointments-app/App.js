import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './composantes/LoginScreen'
import RegisterScreen from './composantes/RegisterScreen';
import CentersScreen from './composantes/CentersScreen';
import TimeslotsScreen from './composantes/TimeslotsScreen';
import AppointmentForm from './composantes/AppointmentForm';
import HomeScreen from './composantes/HomeScreen';
import Myappointments from './composantes/Myappointments'; // Ajoutez l'import
import ConfirmationScreen from './composantes/ConfirmationScreen';
import ResetPasswordScreen from './composantes/ResetPasswordScreen';
import AddRequestScreen from './composantes/AddRequestScreen';
import Footer from './composantes/Footer';
import Header from './composantes/Header';
import { Logout } from './composantes/Logout';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Centers" component={CentersScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Timeslots" component={TimeslotsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AppointmentForm" component={AppointmentForm} options={{ headerShown: false }} />
        <Stack.Screen name="Myappointments" component={Myappointments} options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="AddRequestScreen" component={AddRequestScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Footer" component={Footer} options={{ headerShown: false }} /> 
        <Stack.Screen name="Header" component={Header} options={{ headerShown: false }} /> 
        <Stack.Screen name="Logout" component={Logout} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
