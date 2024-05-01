// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// const AddRequestScreen = ({ navigation }) => {
//   const [nom_demandeur, setNomDemandeur] = useState('');
//   const [groupe_sanguin, setGroupeSanguin] = useState('');
//   const [date_demande, setDateDemande] = useState('');
//   const [contact_demandeur, setContactDemandeur] = useState('');
//   const [ville_demandeur, setVilleDemandeur] = useState('');
//   const [commentaire, setCommentaire] = useState('');
//   const [hopital_du_demandeur, setHopitalDemandeur] = useState('');
//   const [adresse_hopital_du_demandeur, setAdresseHopitalDemandeur] = useState('');

//   const handleSubmit = () => {
//     fetch('https://af00-102-52-136-247.ngrok-free.app/appointments/add-blood-request', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         nom_demandeur,
//         groupe_sanguin,
//         date_demande,
//         contact_demandeur,
//         ville_demandeur,
//         commentaire,
//         hopital_du_demandeur,
//         adresse_hopital_du_demandeur,
//       }),
//     })
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Failed to add blood request');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Blood request added successfully:', data);
//         // Optionally, navigate to a different screen or perform any other action upon successful addition
//       })
//       .catch(error => {
//         console.error('Error adding blood request:', error);
//         // Handle error, display message to the user, etc.
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Text>Formulaire de demande de don de sang</Text>
//       <TextInput
//         style={styles.input}
//         value={nom_demandeur}
//         onChangeText={setNomDemandeur}
//         placeholder="Nom du demandeur"
//       />
//       <TextInput
//         style={styles.input}
//         value={groupe_sanguin}
//         onChangeText={setGroupeSanguin}
//         placeholder="Groupe sanguin"
//       />
//       <TextInput
//         style={styles.input}
//         value={date_demande}
//         onChangeText={setDateDemande}
//         placeholder="Date de la demande"
//       />
//       <TextInput
//         style={styles.input}
//         value={contact_demandeur}
//         onChangeText={setContactDemandeur}
//         placeholder="Contact du demandeur"
//       />
//       <TextInput
//         style={styles.input}
//         value={ville_demandeur}
//         onChangeText={setVilleDemandeur}
//         placeholder="Ville du demandeur"
//       />
//       <TextInput
//         style={styles.input}
//         value={commentaire}
//         onChangeText={setCommentaire}
//         placeholder="Commentaire"
//         multiline
//       />
//       <TextInput
//         style={styles.input}
//         value={hopital_du_demandeur}
//         onChangeText={setHopitalDemandeur}
//         placeholder="Hôpital du demandeur"
//       />
//       <TextInput
//         style={styles.input}
//         value={adresse_hopital_du_demandeur}
//         onChangeText={setAdresseHopitalDemandeur}
//         placeholder="Adresse de l'hôpital du demandeur"
//       />
//       <Button title="Soumettre" onPress={handleSubmit} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     width: '100%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
// });

// export default AddRequestScreen;


import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddRequestScreen = ({ navigation ,route}) => {
  const [nom_demandeur, setNomDemandeur] = useState('');
  const [groupe_sanguin, setGroupeSanguin] = useState('');
  const [date_demande, setDateDemande] = useState(new Date());
  const [contact_demandeur, setContactDemandeur] = useState('');
  const [ville_demandeur, setVilleDemandeur] = useState('');
  const [commentaire, setCommentaire] = useState('');
  const [hopital_du_demandeur, setHopitalDemandeur] = useState('');
  const [adresse_hopital_du_demandeur, setAdresseHopitalDemandeur] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [errors, setErrors] = useState({
    nom_demandeur: '',
    groupe_sanguin: '',
    contact_demandeur: '',
    ville_demandeur: '',
    hopital_du_demandeur: '',
    adresse_hopital_du_demandeur: '',
  });
  const { user_id } = route.params;

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDateDemande(selectedDate);
    }
  };
  
  const showDatePickerModal = () => {
    setShowDatePicker(true);
  };

  const validateForm = () => {
    const newErrors = {
      nom_demandeur: nom_demandeur ? '' : 'Ce champ est obligatoire',
      groupe_sanguin: (groupe_sanguin && isValidBloodGroup(groupe_sanguin)) ? '' : 'Ce champ est obligatoire et doit être valide',
      contact_demandeur: (contact_demandeur && isValidContact(contact_demandeur)) ? '' : 'Ce champ est obligatoire et doit être valide (numéro de téléphone ou adresse email)',
      ville_demandeur: ville_demandeur ? '' : 'Ce champ est obligatoire',
      hopital_du_demandeur: hopital_du_demandeur ? '' : 'Ce champ est obligatoire',
      adresse_hopital_du_demandeur: adresse_hopital_du_demandeur ? '' : 'Ce champ est obligatoire',
    };
    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };
  
  // Fonction pour valider le groupe sanguin
  const isValidBloodGroup = (bloodGroup) => {
    const bloodGroupRegex = /^(A|B|AB|O)[+-]$/;
    return bloodGroupRegex.test(bloodGroup.toUpperCase());
  };
  
  // Fonction pour valider le contact (numéro de téléphone ou adresse email)
  const isValidContact = (contact) => {
    const phoneRegex = /^[0-9]{10}$/; // Exemple de validation de numéro de téléphone (10 chiffres)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Exemple de validation d'adresse email
    return phoneRegex.test(contact) || emailRegex.test(contact);
  };
  
  const handleSubmit = () => {
    if (validateForm()) {
      // Afficher une boîte de dialogue de confirmation
      Alert.alert(
        'Confirmer la demande',
        'Êtes-vous sûr de vouloir soumettre cette demande ?',
        [
          { text: 'Annuler', style: 'cancel' },
          { text: 'Oui', onPress: () => submitRequest() }, // Appeler la fonction submitRequest si l'utilisateur confirme
        ],
        { cancelable: false }
      );
    }
  };

  const submitRequest = () => {
    console.log('Submitting blood request...');
    fetch('https://af00-102-52-136-247.ngrok-free.app/appointments/add-blood-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nom_demandeur,
        groupe_sanguin,
        date_demande,
        contact_demandeur,
        ville_demandeur,
        commentaire,
        hopital_du_demandeur,
        adresse_hopital_du_demandeur,
      }),
    })
      .then(response => {
        console.log('Response received:', response);
        if (!response.ok) {
          throw new Error('Failed to add blood request');
        }
        return response.json();
      })
      .then(data => {
        console.log('Blood request added successfully:', data);
        // Naviguer vers l'écran Home une fois la demande soumise
        navigation.navigate('Home',{user_id});
    })
    //   .catch(error => {
    //     console.error('Error adding blood request:', error);
    //     // Handle error, display message to the user, etc.
    //   });
  };
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Demande de don</Text>
      <Text style={styles.infoText}>Votre demande sera traitée avant d'être publiée , le traitement peut prendre jusqu'à 1 heure.</Text>

      <TextInput
        style={styles.input}
        value={nom_demandeur}
        onChangeText={setNomDemandeur}
        placeholder="Nom du demandeur"
      />
      {errors.nom_demandeur !== '' && <Text style={styles.error}>{errors.nom_demandeur}</Text>}
      <TextInput
        style={styles.input}
        value={groupe_sanguin}
        onChangeText={setGroupeSanguin}
        placeholder="Groupe sanguin"
      />
      {errors.groupe_sanguin !== '' && <Text style={styles.error}>{errors.groupe_sanguin}</Text>}
      <TouchableOpacity style={styles.dateInput} onPress={showDatePickerModal}>
        <TextInput
          style={{ flex: 1 }}
          value={date_demande.toDateString()} // Affichez la date sous forme de chaîne lisible
          editable={false}
        />
      </TouchableOpacity>
      {errors.date_demande !== '' && <Text style={styles.error}>{errors.date_demande}</Text>}
      {showDatePicker && (
        <DateTimePicker
          value={date_demande}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <TextInput
        style={styles.input}
        value={contact_demandeur}
        onChangeText={setContactDemandeur}
        placeholder="Contact du demandeur (télé ou email)"
      />
      {errors.contact_demandeur !== '' && <Text style={styles.error}>{errors.contact_demandeur}</Text>}
      <TextInput
        style={styles.input}
        value={ville_demandeur}
        onChangeText={setVilleDemandeur}
        placeholder="Ville du demandeur"
      />
      {errors.ville_demandeur !== '' && <Text style={styles.error}>{errors.ville_demandeur}</Text>}
      <TextInput
        style={styles.input}
        value={commentaire}
        onChangeText={setCommentaire}
        placeholder="Commentaire"
        multiline
      />
      <TextInput
        style={styles.input}
        value={hopital_du_demandeur}
        onChangeText={setHopitalDemandeur}
        placeholder="Hôpital du demandeur"
      />
      {errors.hopital_du_demandeur !== '' && <Text style={styles.error}>{errors.hopital_du_demandeur}</Text>}
      <TextInput
        style={styles.input}
        value={adresse_hopital_du_demandeur}
        onChangeText={setAdresseHopitalDemandeur}
        placeholder="Adresse de l'hôpital du demandeur"
      />
      {errors.adresse_hopital_du_demandeur !== '' && <Text style={styles.error}>{errors.adresse_hopital_du_demandeur}</Text>}
      <Button
  title="Soumettre"
  onPress={handleSubmit} color="#9C1941" style={styles.submitButton}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
    
      infoText: {
        marginBottom: 20,
        fontSize: 12,

        textAlign: 'center',
        fontStyle: 'italic',
        color: '#888',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop:50,
        color:"#9C1941",
      },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,

  },
  dateInput: {

    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,

  },
  error: {
    textAlign: 'left',
    color: 'red',
    marginBottom: 5,
  }
});

export default AddRequestScreen;
