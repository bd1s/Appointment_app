import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [prenom, setPrenom] = useState('');
  const [tele, setTele] = useState('');

  const handleRegister = async () => {
    // Vérifier si tous les champs sont remplis
    if (!name || !prenom || !tele || !email || !password) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    // Vérifier si l'adresse e-mail est valide
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert( 'Veuillez entrer une adresse e-mail valide.');
      return;
    }

    try {
      const response = await axios.post('https://af00-102-52-136-247.ngrok-free.app/Utilisateurs/register', {
        email: email,
        mdp: password,
        nom: name,
        prenom: prenom,
        tele: tele
      });
      alert('Inscription réussie!');
      navigation.navigate('Login');
    } catch (error) {
      alert('Échec de l\'inscription!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Inscription</Text>
      <TextInput
        style={styles.input}
        value={name}
        placeholder="Entrez votre nom"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        value={prenom}
        placeholder="Entrez votre prénom"
        onChangeText={setPrenom}
      />
      <TextInput
        style={styles.input}
        value={tele}
        onChangeText={setTele}
        keyboardType="phone-pad"
        placeholder="Entrez votre téléphone"
      />
      <TextInput
        style={styles.input}
        value={email}
        placeholder="Entrez votre email"
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Entrez un mot de passe"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>S'inscrire</Text>
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
  button: {
    backgroundColor: '#9C1941',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 10,
    color: "#9C1941",
    textAlign: 'center',
  },
});
