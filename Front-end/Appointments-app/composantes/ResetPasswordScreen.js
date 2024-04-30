import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import axios from 'axios';

const ResetPasswordScreen = () => {
    const [email, setEmail] = useState('');

    const handleResetPassword = () => {
        axios.post('https://af00-102-52-136-247.ngrok-free.app/Utilisateurs/resetPassword', { email })
        .then(response => {
            console.log('Réinitialisation du mot de passe réussie:', response.data);
            Alert.alert('Succès', 'Un e-mail de réinitialisation de mot de passe a été envoyé.');
        })
        .catch(error => {
            console.error('Erreur lors de la réinitialisation du mot de passe:', error);
            Alert.alert('Erreur', 'Une erreur est survenue lors de la réinitialisation du mot de passe.');
        });
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Entrez votre e-mail'
                value={email}
                onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                <Text style={styles.buttonText}>Réinitialiser le mot de passe</Text>
            </TouchableOpacity>
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
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
});

export default ResetPasswordScreen;
