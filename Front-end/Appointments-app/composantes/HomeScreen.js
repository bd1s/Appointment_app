// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import { FontAwesome } from '@expo/vector-icons';
// import  { useState, useEffect } from 'react';
// import {  FlatList } from 'react-native';


// const HomeScreen = ({ navigation, route }) => {
//   const { user_id } = route.params;

//   const images = [
//     { id: 1, source: require('../assets/image1.jpeg') },
//     { id: 2, source: require('../assets/image2.png') },
//     { id: 3, source: require('../assets/image3.jpg') },
//   ];

//   const renderImageItem = ({ item }) => (
//     <Image source={item.source} style={styles.image} />

//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         data={images}
//         renderItem={renderImageItem}
//         sliderWidth={300}
//         itemWidth={300}
//         autoplay={true}
//         autoplayDelay={500}
//         autoplayInterval={3000}
//       />
//       <View style={styles.footer}>
//         <TouchableOpacity onPress={() => navigation.navigate('Centers', { user_id })}>
//           <FontAwesome name="hospital-o" size={30} color="black" />
//           <Text>Centres</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Myappointments', { user_id  })}>
//           <FontAwesome name="calendar" size={30} color="black" />
//           <Text>Rendez-vous</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 300,
//     height: 200,
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     marginTop: 20,
//   },
// });

// export default HomeScreen;



import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Carousel from 'react-native-snap-carousel';
import Footer from './Footer';
import Header from './Header';
import ajouter from '../assets/ajouter.png';

const HomeScreen = ({ navigation, route }) => {
  const { user_id } = route.params;
  const screenWidth = Dimensions.get('window').width;

  const images = [
    { id: 1, source: require('../assets/1.jpg') },
    { id: 2, source: require('../assets/2.jpg') },
    { id: 3, source: require('../assets/3.jpg') },
    { id: 4, source: require('../assets/4.jpg') },
  ];

  const [bloodRequests, setBloodRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBloodRequests = async () => {
    try {
      const response = await fetch('https://af00-102-52-136-247.ngrok-free.app/appointments/blood-requests');
      const data = await response.json();
      setBloodRequests(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blood requests:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchBloodRequests);
    return unsubscribe;
  }, [navigation]);

  const renderImageItem = ({ item }) => (
    <Image source={item.source} style={styles.image} />
  );

  const renderBloodRequestItem = ({ item }) => {
    const requestDate = new Date(item.date_demande);
    const formattedDate = `${requestDate.getFullYear()}-${(requestDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${requestDate.getDate().toString().padStart(2, '0')}`;

    return (
      <View style={styles.requestItem}>
        <View style={styles.detailRow}>
          <Text style={styles.title}>{item.commentaire}</Text>
        </View>
        <View style={styles.detailRow}>
          <FontAwesome name="tint" size={16} color="#5f5f5f" />
          <Text style={styles.requestText}>Groupe sanguin : {item.groupe_sanguin}</Text>
        </View>
        <View style={styles.detailRow}>
          <FontAwesome name="hospital-o" size={12} color="#5f5f5f" />
          <Text style={styles.requestText}>Adresse : {item.adresse_hopital_du_demandeur}</Text>
        </View>
        <View style={styles.detailRow}>
          <FontAwesome name="phone" size={16} color="#5f5f5f" />
          <Text style={styles.requestText}>Contact : {item.contact_demandeur}</Text>
        </View>
        <View style={styles.detailRow}>
          <FontAwesome name="clock-o" size={16} color="#5f5f5f" />
          <Text style={styles.requestText}>Date de demande : {formattedDate}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <Carousel
        data={images}
        renderItem={renderImageItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        autoplay={true}
        autoplayDelay={100}
        autoplayInterval={1000}
        loop={true}
      />
      <FlatList
        data={bloodRequests}
        renderItem={renderBloodRequestItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      {/* Bouton flottant "plus" pour ajouter une demande */}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddRequestScreen', { user_id })}>
        <Image source={ajouter} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.footer}>
        <Footer navigation={navigation} user_id={route.params.user_id} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    
  },
  icon: {
    width: 30, // Largeur de l'image
    height: 30, // Hauteur de l'image
  },
  image: {
    width: '100%',
    height: 200,
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
  
  },
  requestItem: {
    backgroundColor: '#FCCAD3',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    width: '100%',
  },
  requestText: {
    marginLeft: 10,
    fontSize: 16,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  addButton: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: "#9C1941",
  },
});

export default HomeScreen;
