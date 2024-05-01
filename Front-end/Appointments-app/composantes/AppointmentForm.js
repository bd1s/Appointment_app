
// sans calendrie 

// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import axios from 'axios';

// export default function AppointmentForm({ route, navigation }) {
//   const { center_id, timeslot_id, user_id } = route.params;
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('https://aef2-105-67-128-195.ngrok-free.app/appointments/appointments', {
//         center_id: center_id,
//         timeslot_id: timeslot_id,
//         user_id: user_id,
//         date: date, // Send the formatted date to the backend
//         name: name,
//         email: email,
//         phone_number: phoneNumber
//       });

//       console.log('Réponse de la réservation reçue :', response.data);

//       // Si le code de statut est 201 ou 202, alors la réservation a réussi ou est en attente
//       if (response.status === 201 || response.status === 202) {
//         Alert.alert('Succès', response.data);
//         // Rediriger l'utilisateur vers une page de confirmation ou une autre page appropriée
//       } else {
//         // Si le code de statut est 400, alors il y a une erreur avec la réservation
//         throw new Error('Erreur lors de la prise de rendez-vous');
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         // Si l'erreur est une réponse 400, afficher le message d'erreur associé
//         Alert.alert('', error.response.data);
//       } else {
//         // Sinon, afficher un message d'erreur générique
//         Alert.alert('Erreur', 'Une erreur est survenue lors de la prise de rendez-vous. Veuillez réessayer.');
//       }
//     }
//   };

//   return (
    
//     <View style={styles.container}>
//     <Text>Nom:</Text>
//       <TextInput
//         style={styles.input}
//         value={name}
//         onChangeText={setName}
//         placeholder="Entrez votre nom"
//       />
//       <Text>Email:</Text>
//       <TextInput
//         style={styles.input}
//         value={email}
//         onChangeText={setEmail}
//         placeholder="Entrez votre email"
//         keyboardType="email-address"
//       />
//       <Text>Numéro de téléphone:</Text>
//       <TextInput
//         style={styles.input}
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//         placeholder="Entrez votre numéro de téléphone"
//         keyboardType="phone-pad"
//       />
//       <Text>Date:</Text>
//       <TextInput
//         style={styles.input}
//         value={date}
//         onChangeText={setDate}
//         placeholder="YYYY-MM-DD"
//         keyboardType="numeric"
//       />
//       <Button title="Réserver" onPress={handleSubmit} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     padding: 10,
//     marginBottom: 10,
//   },
// });













// avec calendrie 

// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, StyleSheet, Alert } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import axios from 'axios';

// export default function AppointmentForm({ route, navigation }) {
//   const { center_id, timeslot_id, user_id } = route.params;
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('https://aef2-105-67-128-195.ngrok-free.app/appointments/appointments', {
//         center_id: center_id,
//         timeslot_id: timeslot_id,
//         user_id: user_id,
//         date: date.toISOString().split('T')[0] // Format YYYY-MM-DD
//       });

//       console.log('Réponse de la réservation reçue :', response.data);

//       // Si le code de statut est 201 ou 202, alors la réservation a réussi ou est en attente
//       if (response.status === 201 || response.status === 202) {
//         Alert.alert('Succès', response.data);
//         // Rediriger l'utilisateur vers une page de confirmation ou une autre page appropriée
//       } else {
//         // Si le code de statut est 400, alors il y a une erreur avec la réservation
//         throw new Error('Erreur lors de la prise de rendez-vous');
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         // Si l'erreur est une réponse 400, afficher le message d'erreur associé
//         Alert.alert('', error.response.data);
//       } else {
//         // Sinon, afficher un message d'erreur générique
//         Alert.alert('Erreur', 'Une erreur est survenue lors de la prise de rendez-vous. Veuillez réessayer.');
//       }
//     }
//   };

//   const handleDateChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShowDatePicker(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const showDatepicker = () => {
//     setShowDatePicker(true);
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Date:</Text>
//       <View>
//         <Button title="Sélectionner une date" onPress={showDatepicker} />
//         {showDatePicker && (
//           <DateTimePicker
//             testID="dateTimePicker"
//             value={date}
//             mode="date"
//             display="default"
//             onChange={handleDateChange}
//           />
//         )}
//       </View>
//       <Button title="Réserver" onPress={handleSubmit} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
// });











//calendrie avec form
// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet, Alert, TextInput } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import axios from 'axios';

// export default function AppointmentForm({ route, navigation }) {
//   const { center_id, timeslot_id, user_id } = route.params;
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleSubmit = async () => {
//     try {
//       const formattedDate = date.toISOString().split('T')[0]; // Format the date correctly

//       const response = await axios.post('https://aef2-105-67-128-195.ngrok-free.app/appointments/appointments', {
//         center_id: center_id,
//         timeslot_id: timeslot_id,
//         user_id: user_id,
//         date: formattedDate, // Send the formatted date to the backend
//         name: name,
//         email: email,
//         phone_number: phoneNumber
//       });

//       console.log('Réponse de la réservation reçue :', response.data);

//       // Si le code de statut est 201 ou 202, alors la réservation a réussi ou est en attente
//       if (response.status === 201 || response.status === 202) {
//         Alert.alert('Succès', response.data);
//         // Rediriger l'utilisateur vers une page de confirmation ou une autre page appropriée
//       } else {
//         // Si le code de statut est 400, alors il y a une erreur avec la réservation
//         throw new Error('Erreur lors de la prise de rendez-vous');
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         // Si l'erreur est une réponse 400, afficher le message d'erreur associé
//         Alert.alert('', error.response.data);
//       } else {
//         // Sinon, afficher un message d'erreur générique
//         Alert.alert('Erreur', 'Une erreur est survenue lors de la prise de rendez-vous. Veuillez réessayer.');
//       }
//     }
//   };

  
//   const handleDateChange = (event, selectedDate) => {
//     console.log(' date sélectionnée :', selectedDate);
//     setShowDatePicker(Platform.OS === 'ios');
//     setDate(selectedDate);
//   };
  
//   const showDatepicker = () => {
//     setShowDatePicker(true);
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Nom:</Text>
//       <TextInput
//         style={styles.input}
//         value={name}
//         onChangeText={setName}
//         placeholder="Entrez votre nom"
//       />
//       <Text>Email:</Text>
//       <TextInput
//         style={styles.input}
//         value={email}
//         onChangeText={setEmail}
//         placeholder="Entrez votre email"
//         keyboardType="email-address"
//       />
//       <Text>Numéro de téléphone:</Text>
//       <TextInput
//         style={styles.input}
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//         placeholder="Entrez votre numéro de téléphone"
//         keyboardType="phone-pad"
//       />
//       <Text>Date:</Text>
//       <View>
//         <Button title="Sélectionner une date" onPress={showDatepicker} />
//         {showDatePicker && (
//           <DateTimePicker
//             testID="dateTimePicker"
//             value={date}
//             mode="date"
//             display="default"
//             onChange={handleDateChange}
//           />
//         )}
//       </View>
//       <Button title="Réserver" onPress={handleSubmit} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     padding: 10,
//     marginBottom: 10,
//   },
// });












//calendrie format avec succes 
// Importez useState pour gérer l'état de la date
// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Alert, Platform, Button } from 'react-native'; // Ajout de Button dans les imports
// import DateTimePicker from '@react-native-community/datetimepicker';
// import axios from 'axios';

// export default function AppointmentForm({ route, navigation }) {
//   const { center_id, timeslot_id, user_id } = route.params;
//   const [date, setDate] = useState(new Date());
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const formatDate = (date) => {
//     const year = date.getFullYear();
//     const month = date.getMonth() + 1;
//     const day = date.getDate();
//     return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
//   };

//   const handleSubmit = async () => {
//     try {
//       const formattedDate = formatDate(date);

//       const response = await axios.post('https://aef2-105-67-128-195.ngrok-free.app/appointments/appointments', {
//         center_id: center_id,
//         timeslot_id: timeslot_id,
//         user_id: user_id,
//         date: formattedDate,
//         name: name,
//         email: email,
//         phone_number: phoneNumber
//       });

//       console.log('Réponse de la réservation reçue :', response.data);

//       if (response.status === 201 || response.status === 202) {
//         Alert.alert('Succès', response.data);
//       } else {
//         throw new Error('Erreur lors de la prise de rendez-vous');
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         Alert.alert('', error.response.data);
//       } else {
//         Alert.alert('Erreur', 'Une erreur est survenue lors de la prise de rendez-vous. Veuillez réessayer.');
//       }
//     }
//   };

//   const handleDateChange = (event, selectedDate) => {
//     setShowDatePicker(Platform.OS === 'ios');
//     if (selectedDate) {
//       setDate(selectedDate);
//       console.log('Date sélectionnée mise à jour :', selectedDate);
//     }
//   };
  
//   const showDatepicker = () => {
//     setShowDatePicker(true);
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Nom:</Text>
//       <TextInput
//         style={styles.input}
//         value={name}
//         onChangeText={setName}
//         placeholder="Entrez votre nom"
//       />
//       <Text>Email:</Text>
//       <TextInput
//         style={styles.input}
//         value={email}
//         onChangeText={setEmail}
//         placeholder="Entrez votre email"
//         keyboardType="email-address"
//       />
//       <Text>Numéro de téléphone:</Text>
//       <TextInput
//         style={styles.input}
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//         placeholder="Entrez votre numéro de téléphone"
//         keyboardType="phone-pad"
//       />
//       <Text>Date:</Text>
//       <View>
//         <TextInput
//           style={[styles.input, { borderColor: 'transparent', borderBottomColor: '#ddd', borderBottomWidth: 1 }]}
//           value={formatDate(date)}
//           onFocus={showDatepicker}
//         />
//         {showDatePicker && (
//           <DateTimePicker
//             testID="dateTimePicker"
//             value={date}
//             mode="date"
//             display="default"
//             onChange={handleDateChange}
//           />
//         )}
//       </View>
//       <Button title="Réserver" onPress={handleSubmit} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     padding: 10,
//     marginBottom: 10,
//   },
// });
// ;



















import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

export default function AppointmentForm({ route, navigation }) {
  const { center_id, timeslot_id, user_id } = route.params;
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };
  
  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const confirmReservation = async () => {
    try {
      const formattedDate = formatDate(date);

      const response = await axios.post('https://af00-102-52-136-247.ngrok-free.app/appointments/appointments', {
        center_id: center_id,
        timeslot_id: timeslot_id,
        user_id: user_id,
        date: formattedDate,
        name: name,
        email: email,
        phone_number: phoneNumber
      });

      if (response.status === 201 || response.status === 202) {
        Alert.alert(
          'Confirmation de réservation',
          'Êtes-vous sûr de vouloir réserver ce créneau ?',
          [
            {
              text: 'Annuler',
              style: 'cancel',
            },
            {
              text: 'Valider',
              onPress: () => {
                navigation.navigate('Myappointments', {  user_id , appointment: response.data });
              },
            },
          ]
        );
      } else {
        throw new Error('Erreur lors de la prise de rendez-vous');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Alert.alert('', error.response.data);
      } else {
        Alert.alert('Erreur', 'Une erreur est survenue lors de la prise de rendez-vous. Veuillez réessayer.');
      }
    }
  };

  return (

    <View style={styles.container}>
      <Text style={styles.title1}>Réservation</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Entrez votre nom"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Entrez votre email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Entrez votre numéro de téléphone"
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.dateInput} onPress={showDatepicker}>
        <TextInput
          style={{ flex: 1 }}
          value={formatDate(date)}
          editable={false}
        />
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <TouchableOpacity style={styles.button} onPress={confirmReservation}>
        <Text style={styles.buttonText}>Réserver</Text>
      </TouchableOpacity>
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
    borderRadius: 10,

  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,

  },
  button: {
    backgroundColor: '#9C1941',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
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












