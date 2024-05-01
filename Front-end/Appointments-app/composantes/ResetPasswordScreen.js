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
        <View style={styles.container}>
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 20,
    },
    input: {
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 20,

    },

    button: {
        backgroundColor: '#9C1941',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    }
});

export default ResetPasswordScreen;
