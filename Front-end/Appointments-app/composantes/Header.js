// import React from 'react';
// import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; 
// import { Logout } from './Logout';

// const Header = () => {
//   const navigation = useNavigation(); 

//   const handleLogout = () => {
//     Logout({ navigation }); 
//   };

//   return (
//     <View style={styles.header}>
//       {/* Nom de l'application à l'extrémité gauche */}
//       <Text style={styles.logo}>E-RED</Text>
      
//       {/* Bouton de connexion à l'extrémité droite */}
//       <TouchableOpacity onPress={handleLogout} style={styles.loginButton}>
//         <Text style={styles.loginButtonText}>logout</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     backgroundColor: '#f0f0f0',
//   },
//   logo: {
//     fontSize:24,
//     fontWeight:'bold'
    
//   },
//    loginButton:{
//      paddingVertical:10,
//      paddingHorizontal:20,
//      borderRadius :5,
//      backgroundColor:'#ddd'
//    },
//    loginButtonText:{
//        fontSize :16
//    }
// });

// export default Header;


import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { Logout } from './Logout';

const Header = () => {
  const navigation = useNavigation(); 

  const handleLogout = () => {
    Logout({ navigation }); 
  };

  return (
    <View style={styles.header}>
      {/* Nom de l'application à l'extrémité gauche */}
       {/* <Text style={styles.logo}>WellWave</Text>  */}
      <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
            />
      {/* Bouton de déconnexion à l'extrémité droite */}
      <TouchableOpacity onPress={handleLogout} style={styles.loginButton}>
        <Text style={styles.loginButtonText}>logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10, // Augmenter la marge
    paddingVertical: 8,
    backgroundColor: '#fff', // Fond blanc
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%', // Prend toute la largeur de l'écran

  },
  logo: {
    // fontSize:24,
    // fontWeight:'bold',
    marginTop: 40,
    width: 60, // Largeur de l'image
    height: 50, // Ajoute une marge en haut

  },
  loginButton: {
    width: 90,
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderColor: 'black', // Couleur de la bordure
    borderWidth: 0.5, // Épaisseur de la bordure
    marginTop: 40,
  },
  
   loginButtonText:{
       fontSize :16
   }
});

export default Header;
