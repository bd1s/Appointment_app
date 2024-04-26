// TimeslotsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TimeslotsScreen({ route, navigation }) {
  const { center_id,user_id } = route.params;

  const [timeslots, setTimeslots] = useState([]);

  useEffect(() => {
    const fetchTimeslots = async () => {
      try {
        const response = await axios.get(`https://a4c0-105-66-134-72.ngrok-free.app/appointments/timeslots/${center_id}`);
        setTimeslots(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des créneaux:', error);
      }
    };

    

    fetchTimeslots();
  }, [center_id]);

  const navigateToAppointmentForm = (timeslot_id) => {
    navigation.navigate('AppointmentForm', { center_id, timeslot_id, user_id });
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={timeslots}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigateToAppointmentForm(item.id)}
          >
            <Text style={styles.title}>{item.heure_debut} - {item.heure_fin}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});
