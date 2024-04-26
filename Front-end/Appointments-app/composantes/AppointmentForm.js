import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function AppointmentForm({ route, navigation }) {
  const { center_id, timeslot_id, user_id } = route.params;
  const [date, setDate] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://a4c0-105-66-134-72.ngrok-free.app/appointments/appointments', {
        center_id: center_id,
        timeslot_id: timeslot_id,
        user_id: user_id,
        date: date
      });

      console.log('Réponse de la réservation reçue :', response.data);

      // Si le code de statut est 201 ou 202, alors la réservation a réussi ou est en attente
      if (response.status === 201 || response.status === 202) {
        Alert.alert('Succès', response.data);
        // Rediriger l'utilisateur vers une page de confirmation ou une autre page appropriée
      } else {
        // Si le code de statut est 400, alors il y a une erreur avec la réservation
        throw new Error('Erreur lors de la prise de rendez-vous');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Si l'erreur est une réponse 400, afficher le message d'erreur associé
        Alert.alert('', error.response.data);
      } else {
        // Sinon, afficher un message d'erreur générique
        Alert.alert('Erreur', 'Une erreur est survenue lors de la prise de rendez-vous. Veuillez réessayer.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text>Date:</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="YYYY-MM-DD"
        keyboardType="numeric"
      />
      <Button title="Réserver" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
  },
});
