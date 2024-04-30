// logout.js

import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';

// Fonction de déconnexion
export const logout = async () => {
  try {
    // Afficher une boîte de dialogue de confirmation
    Alert.alert(
      'Déconnexion',
      'Êtes-vous sûr de vouloir vous déconnecter ?',
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Oui',
          onPress: async () => {
            // Supprimer le jeton d'authentification stocké localement
            await AsyncStorage.removeItem('authToken');
            console.log('User logged out successfully');
          },
        },
      ],
      { cancelable: false }
    );
  } catch (error) {
    console.error('Error logging out:', error);
    throw new Error('Failed to log out');
  }
};
