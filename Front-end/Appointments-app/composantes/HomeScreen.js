import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { FontAwesome } from '@expo/vector-icons';

const HomeScreen = ({ navigation, route }) => {
  const { user_id } = route.params;

  const images = [
    { id: 1, source: require('../assets/image1.jpeg') },
    { id: 2, source: require('../assets/image2.png') },
    { id: 3, source: require('../assets/image3.jpg') },
  ];

  const renderImageItem = ({ item }) => (
    <Image source={item.source} style={styles.image} />
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderImageItem}
        sliderWidth={300}
        itemWidth={300}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
      />
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Centers', { user_id })}>
          <FontAwesome name="hospital-o" size={30} color="black" />
          <Text>Centres</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Myappointments', { user_id  })}>
          <FontAwesome name="calendar" size={30} color="black" />
          <Text>Rendez-vous</Text>
        </TouchableOpacity>
      </View>
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
