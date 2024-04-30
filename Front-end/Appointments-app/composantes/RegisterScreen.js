import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [tele, setTele] = useState(''); // Ajout du state pour le numéro de téléphone


  const handleRegister = async () => {
    try {
      const response = await axios.post('https://af00-102-52-136-247.ngrok-free.app/Utilisateurs/register', {
        email: email,
        mdp: password,
        nom: name,
        prenom: prenom, // Passage du prénom dans la requête de création de compte
        tele: tele // Passage du numéro de téléphone dans la requête de création de compte

      });
      alert('Inscription réussie!');
      navigation.navigate('Login');
    } catch (error) {
      alert('Échec de linscription!');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Nom:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text>Prénom:</Text> 
      <TextInput
        style={styles.input}
        value={prenom}
        onChangeText={setPrenom}
      />
      
      <Text>Téléphone:</Text> 
      <TextInput
        style={styles.input}
        value={tele}
        onChangeText={setTele}
        keyboardType="phone-pad" // Utilisation du clavier numérique pour les numéros de téléphone
      />
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <Text>Mot de passe:</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="S'inscrire" onPress={handleRegister} />
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
