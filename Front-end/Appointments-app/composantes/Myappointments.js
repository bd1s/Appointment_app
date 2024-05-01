
// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import axios from 'axios';

// export default function Myappointments({ route }) {
//   const { user_id } = route.params;
//   const { appointmentId } = route.params;

//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const response = await axios.get(`https://aef2-105-67-128-195.ngrok-free.app/appointments/appointments/${user_id}`);
//         const formattedAppointments = response.data.map(appointment => ({
//           ...appointment,
//           date: new Date(appointment.date).toLocaleDateString(),
//         }));
//         setAppointments(formattedAppointments);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des rendez-vous:', error);
//       }
//     };

//     fetchAppointments();
//   }, [user_id]);

//   const handleAppointmentLongPress = async (id) => {
//     try {
//       const response = await axios.delete(`https://aef2-105-67-128-195.ngrok-free.app/appointments/appointments/${id}`);
//       console.log(response.data); // Affiche le message de confirmation du backend

//     } catch (error) {
//       console.error('Erreur lors de l\'annulation du rendez-vous:', error);
//     }
//   };
  

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.item}
//       onPress={() => console.log("Rendez-vous sélectionné:", item)}
//       onLongPress={() => {
//         Alert.alert(
//           'Confirmation',
//           'Voulez-vous annuler ce rendez-vous ?',
//           [
//             { text: 'Annuler', style: 'cancel' },
//             { text: 'Oui', onPress: () => handleAppointmentLongPress(item.id) },
//           ]
//         );
//       }}
//     >
//       <Text>Date: {item.date}</Text>
//       <Text>Centre: {item.center_nom}</Text>
//       <Text>Adresse: {item.adresse}</Text>
//       <Text>Heure de début: {item.heure_debut}</Text>
//       <Text>Heure de fin: {item.heure_fin}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={appointments}
//         keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
//         renderItem={renderItem}
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





// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import axios from 'axios';

// export default function Myappointments({ route ,navigation}) {
//   const { user_id } = route.params;

//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const response = await axios.get(`https://af00-102-52-136-247.ngrok-free.app/appointments/appointments/user/${user_id}`);
//         const formattedAppointments = response.data.map(appointment => ({
//           ...appointment,
//           date: new Date(appointment.date).toLocaleDateString(),
//         }));
//         setAppointments(formattedAppointments);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des rendez-vous:', error);
//       }
//     };

//     fetchAppointments();
//   }, [user_id]);

//   const handleAppointmentLongPress = async (id) => {
//     try {
//       await axios.delete(`https://af00-102-52-136-247.ngrok-free.app/appointments/appointments/${id}`);
//       // Supprimer l'élément de la liste des rendez-vous dans l'état local
//       const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
//       // Mettre à jour l'état local avec la nouvelle liste des rendez-vous
//       setAppointments(updatedAppointments);
//     } catch (error) {
//       console.error('Erreur lors de l\'annulation du rendez-vous:', error);
//     }
//   };
  

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.item}
//       onPress={() => navigation.navigate('ConfirmationScreen', { appointment: item })}  // Naviguer vers la page Confirmation avec les détails
//       onLongPress={() => {
//         Alert.alert(
//           'Confirmation',
//           'Voulez-vous annuler ce rendez-vous ?',
//           [
//             { text: 'Annuler', style: 'cancel' },
//             { text: 'Oui', onPress: () => handleAppointmentLongPress(item.id) },
//           ]
//         );
//       }}
//     >
//       <Text>Date: {item.date}</Text>
//       <Text>Centre: {item.center_nom}</Text>
//       <Text>Adresse: {item.adresse}</Text>
//       <Text>Heure de début: {item.heure_debut}</Text>
//       <Text>Heure de fin: {item.heure_fin}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={appointments}
//         keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
//         renderItem={renderItem}
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
import Footer from './Footer';

export default function Myappointments({ route, navigation }) {
  const { user_id } = route.params;

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(`https://af00-102-52-136-247.ngrok-free.app/appointments/appointments/user/${user_id}`);
        const formattedAppointments = response.data.map(appointment => ({
          ...appointment,
          date: new Date(appointment.date).toLocaleDateString(),
        }));
        setAppointments(formattedAppointments);
        setLoading(false); // Mettre à jour l'état loading une fois les rendez-vous récupérés
      } catch (error) {
        console.error('Erreur lors de la récupération des rendez-vous:', error);
      }
    };

    fetchAppointments();
  }, [user_id]);

  const handleAppointmentLongPress = async (id) => {
    try {
      await axios.delete(`https://af00-102-52-136-247.ngrok-free.app/appointments/appointments/${id}`);
      // Supprimer l'élément de la liste des rendez-vous dans l'état local
      const updatedAppointments = appointments.filter(appointment => appointment.id !== id);
      // Mettre à jour l'état local avec la nouvelle liste des rendez-vous
      setAppointments(updatedAppointments);
    } catch (error) {
      console.error('Erreur lors de l\'annulation du rendez-vous:', error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('ConfirmationScreen', { appointment: item })}  // Naviguer vers la page Confirmation avec les détails
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
      <Text>Heure : {item.heure_debut}</Text>
      <Text>Ordre : {item.ordre}</Text>

    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vos rendez-vous </Text>
      {loading ? (
        <Text style={styles.loading}>Chargement des rendez-vous...</Text>
      ) : appointments.length === 0 ? (
        <Text style={styles.noAppointments}>Aucun rendez-vous réservé pour le moment.</Text>
      ) : (
        <FlatList
          data={appointments}
          keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
          renderItem={renderItem}
          keyboardShouldPersistTaps="handled" // Cette propriété permet au clavier de gérer les taps
          contentContainerStyle={{ paddingBottom: 80 }} // Ajoutez un padding en bas égal à la hauteur du footer
        />
      )}
      <Footer navigation={navigation} user_id={route.params.user_id} />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#FCCAD3',
    borderRadius: 10,
  },
  title: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 50,
    color: "#9C1941",
  },
  loading: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  noAppointments: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: 'red',
    fontWeight: 'bold',
  },
});
