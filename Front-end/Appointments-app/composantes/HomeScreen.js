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
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { FontAwesome } from '@expo/vector-icons';
import Footer from './Footer';
import Header from './Header';


const HomeScreen = ({ navigation, route }) => {
  const { user_id } = route.params;

  // State for carousel images
  const images = [
    { id: 1, source: require('../assets/image1.jpeg') },
    { id: 2, source: require('../assets/image2.png') },
    { id: 3, source: require('../assets/image3.jpg') },
  ];

  // State for blood requests
  const [bloodRequests, setBloodRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch blood requests from the backend
  const fetchBloodRequests = async () => {
    try {
      const response = await fetch('https://af00-102-52-136-247.ngrok-free.app/appointments/blood-requests');
      const data = await response.json();
      const formattedData = data.map(item => ({
        ...item,
        date_demande: item.date_demande.split('T')[0] // Keep only the date part
      }));
      setBloodRequests(formattedData);
      setLoading(false); // Set loading to false once requests are fetched
    } catch (error) {
      console.error('Error fetching blood requests:', error);
    }
  };

  useEffect(() => {
    // Fetch blood requests when the component mounts or when it comes into focus
    const reloadBloodRequests = navigation.addListener('focus', fetchBloodRequests);
    
    // Clean up the listener when the component unmounts
    return reloadBloodRequests;
  }, [navigation]);

  // Render function for carousel items
  const renderImageItem = ({ item }) => (
    <Image source={item.source} style={styles.image} />
  );

  // Render function for blood requests
  const renderBloodRequestItem = ({ item }) => (
    <View style={styles.requestItem}>
      <Text style={styles.requestText}>{item.commentaire}</Text>
      <Text style={styles.requestText}>Groupe sanguin : {item.groupe_sanguin}</Text>
      <Text style={styles.requestText}>Adresse de hopital : {item.adresse_hopital_du_demandeur}</Text>
      <Text style={styles.requestText}>Contact : {item.contact_demandeur}</Text>
      <Text style={styles.requestText}>{item.date_demande}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
     <Header />
      <Carousel
        data={images}
        renderItem={renderImageItem}
        sliderWidth={300}
        itemWidth={300}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
      />
      <FlatList
        data={bloodRequests}
        renderItem={renderBloodRequestItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContainer}
      />
      <Footer navigation={navigation} user_id={route.params.user_id} />

      {/* <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Centers', { user_id })}>
          <FontAwesome name="hospital-o" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AddRequestScreen', { user_id })}>
          <FontAwesome name="plus-circle" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Myappointments', { user_id })}>
          <FontAwesome name="calendar" size={30} color="black" />
        </TouchableOpacity>

      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
  },
  listContainer: {
    width: '100%',
  },
  requestItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  requestText: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
});

export default HomeScreen;
