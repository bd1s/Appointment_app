// TimeslotsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet ,Image} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TimeslotsScreen({ route, navigation }) {
  const { center_id,user_id } = route.params;

  const [timeslots, setTimeslots] = useState([]);

  useEffect(() => {
    const fetchTimeslots = async () => {
      try {
        const response = await axios.get(`https://af00-102-52-136-247.ngrok-free.app/appointments/timeslots/${center_id}`);
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
      <Text style={styles.title1}>Créneaux disponibles</Text>

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
       <View style={styles.imageContainer}>
        <Image
          source={require('../assets/Checklist-bro.png')} // Remplacez le chemin par le chemin de votre image
          style={{ width: 280, height: 200 }} // Ajustez la taille selon vos besoins
        />
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      paddingTop: 100,
    },
    item: {
      backgroundColor: '#ECA9B3',
      padding: 20,
      borderRadius: 10,
      marginVertical: 8,
      marginHorizontal: 16,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    title: {
      fontSize: 24,
      color: '#333333',
    },
    imageContainer: {
      position: 'absolute',
      bottom: 30, // Adjust this value to position the image vertically
      alignSelf: 'center',
      
    },
    title1: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 30,
      marginTop:10,
      color:"#9C1941",
      textAlign: 'center', // Centrer le titre horizontalement

    },
  });
  