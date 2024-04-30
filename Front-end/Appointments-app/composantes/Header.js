import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation depuis @react-navigation/native
import { Logout } from './Logout';
const Header = () => {
  const navigation = useNavigation(); // Utilisez useNavigation pour obtenir l'objet de navigation

  const handleLogout = () => {
    Logout({ navigation }); // Passez navigation en tant que paramètre à la fonction Logout
  };

  return (
    <View style={styles.header}>
      {/* Logo de l'application à l'extrémité gauche */}
      <Image
        source={require('../assets/image1.jpeg')}
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
