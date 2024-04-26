import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button } from 'react-native';
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';

const Connexion = () => {
    const [email, setEmail] =useState('');
    const [mdp, setmotdepasse] =useState('');
    const [showPassword, setshowPassword] = useState(false);
    const navigation = useNavigation();

    const handleCreateAccount = () => {
      navigation.navigate('Register');
    };
  

    const handleSubmit = () => {
        axios.post('https://a4c0-105-66-134-72.ngrok-free.app/Utilisateurs/login', {
            email,
            mdp
        })
     .then(response => {
        console.log('utilisateur connecté avec succés:', response.data);
        const user_id = response.data.user_id;
        // Naviguer vers la page Listecentres avec userId en tant que paramètre
        navigation.navigate('Home',{user_id});
     })
     .catch(error => {
        console.log('Erreur lors de la connexion:', error);
     });
    };


    return (
       <View>
          <TextInput
            style={styles.input}
            placeholder='Email'
            value={email}
            onChangeText={text => setEmail(text)}
          />

         <TextInput
            style={styles.input}
            placeholder='Mot de passe'
            value={mdp}
            onChangeText={text => setmotdepasse(text)}
            secureTextEntry={!showPassword}
          />
           <Button title={showPassword ? "Masquer mot de passe" :"Afficher mot de passe "} onPress={() => setshowPassword(!showPassword)} />
           <Button title='Se connecter' onPress={handleSubmit}/>
           <Button title='Creer un compte' onPress={handleCreateAccount}/>

       </View>

    );

};


const styles = StyleSheet.create({
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 10,
    },
  });

  export default Connexion;