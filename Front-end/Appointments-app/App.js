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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Connexion' }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Inscription' }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Centers" component={CentersScreen} options={{ title: 'Centres de Santé' }} />
        <Stack.Screen name="Timeslots" component={TimeslotsScreen} options={{ title: 'Créneaux Disponibles' }} />
        <Stack.Screen name="AppointmentForm" component={AppointmentForm} options={{ title: 'Reservation' }} />
        <Stack.Screen name="Myappointments" component={Myappointments} options={{ title: 'Mes Rendez-vous' }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
