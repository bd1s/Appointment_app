// Header.js

import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { logout } from './logout ';
const Header = () => {
  const handleLogout = () => {
    logout(); // Appel de la fonction logout lorsque l'utilisateur clique sur l'icône de déconnexion
  };

  return (
    <View style={styles.header}>
      {/* Logo de l'application à l'extrémité gauche */}
      <Image
        source={require('./path/to/your/logo.png')}
        style={styles.logo}
      />
      {/* Icône de déconnexion à l'extrémité droite */}
      <TouchableOpacity onPress={handleLogout}>
        <FontAwesome name="sign-out" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
  },
  logo: {
    width: 100,
    height: 40,
  },
});

export default Header;
