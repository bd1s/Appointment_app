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
import { logout } from './composantes/logout ';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen}  />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Centers" component={CentersScreen}  />
        <Stack.Screen name="Timeslots" component={TimeslotsScreen} />
        <Stack.Screen name="AppointmentForm" component={AppointmentForm} />
        <Stack.Screen name="Myappointments" component={Myappointments} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen}  /> 
        <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen}  /> 
        <Stack.Screen name="AddRequestScreen" component={AddRequestScreen}  /> 
        <Stack.Screen name="Footer" component={Footer}  /> 
        <Stack.Screen name="Header" component={Header}  /> 
        <Stack.Screen name="logout" component={logout} />


        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
