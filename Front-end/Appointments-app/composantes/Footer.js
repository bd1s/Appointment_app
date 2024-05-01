import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import accueil from'../assets/accueil.png';
import calendar from'../assets/calendar.png';

import couches from'../assets/couches.png';


const Footer = ({ navigation, user_id }) => {
  return (
    <View style={styles.footer}>
      
      <TouchableOpacity onPress={() => navigation.navigate('Centers', { user_id })}>
        <Image source={calendar} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home', { user_id })}>
        <FontAwesome name="home" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Myappointments', { user_id })}>
        <Image source={couches} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    width: '100%', // Modifier la largeur pour qu'elle prenne toute la largeur de l'écran
    
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 60, // Ajustez la hauteur selon vos besoins
      backgroundColor: '#fff', // Couleur de fond du footer
    
  },
  icon: {
    width: 30,
    height: 30,
  },
};

export default Footer;
