
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import axios from 'axios';

// export default function Myappointments({ route }) {
//   const { user_id } = route.params;
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         console.log("Requête GET pour les rendez-vous de l'utilisateur avec l'ID :", user_id);
//         const response = await axios.get(`https://a4c0-105-66-134-72.ngrok-free.app/appointments/appointments/${user_id}`);
//         console.log('Réponse du backend :', response.data);
//         // Formater la date pour l'affichage
//         const formattedAppointments = response.data.map(appointment => ({
//           ...appointment,
//           date: new Date(appointment.date).toLocaleDateString(), // Formatage de la date
//         }));
//         setAppointments(formattedAppointments);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des rendez-vous:', error);
//       }
//     };

//     fetchAppointments();
//   }, [user_id]);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={appointments}
//         keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Text>Date: {item.date}</Text>
//             <Text>Centre: {item.center_nom}</Text>
//             <Text>Adresse: {item.adresse}</Text>
//             <Text>Heure de début: {item.heure_debut}</Text>
//             <Text>Heure de fin: {item.heure_fin}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
// });
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

export default function Myappointments({ route }) {
  const { user_id } = route.params;
  const { appointmentId } = route.params;

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`https://a4c0-105-66-134-72.ngrok-free.app/appointments/appointments/${user_id}`);
        const formattedAppointments = response.data.map(appointment => ({
          ...appointment,
          date: new Date(appointment.date).toLocaleDateString(),
        }));
        setAppointments(formattedAppointments);
      } catch (error) {
        console.error('Erreur lors de la récupération des rendez-vous:', error);
      }
    };

    fetchAppointments();
  }, [user_id]);

  const handleAppointmentLongPress = async (id) => {
    try {
      const response = await axios.delete(`https://a4c0-105-66-134-72.ngrok-free.app/appointments/appointments/${id}`);
      console.log(response.data); // Affiche le message de confirmation du backend
      fetchAppointments();

    } catch (error) {
      console.error('Erreur lors de l\'annulation du rendez-vous:', error);
    }
  };
  

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => console.log("Rendez-vous sélectionné:", item)}
      onLongPress={() => {
        Alert.alert(
          'Confirmation',
          'Voulez-vous annuler ce rendez-vous ?',
          [
            { text: 'Annuler', style: 'cancel' },
            { text: 'Oui', onPress: () => handleAppointmentLongPress(item.id) },
          ]
        );
      }}
    >
      <Text>Date: {item.date}</Text>
      <Text>Centre: {item.center_nom}</Text>
      <Text>Adresse: {item.adresse}</Text>
      <Text>Heure de début: {item.heure_debut}</Text>
      <Text>Heure de fin: {item.heure_fin}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={appointments}
        keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
        renderItem={renderItem}
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
});