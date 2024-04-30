// Footer.js

import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Footer = ({ navigation, user_id }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home', { user_id })}>
        <FontAwesome name="home" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Centers', { user_id })}>
        <FontAwesome name="hospital-o" size={30} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AddRequestScreen', { user_id })}>
          <FontAwesome name="plus-circle" size={30} color="black" />
        </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Myappointments', { user_id })}>
        <FontAwesome name="calendar" size={30} color="black" />
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
    width: '100%',
  },
};

export default Footer;
