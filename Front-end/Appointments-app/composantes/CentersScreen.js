// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';
// import axios from 'axios';

// export default function CentersScreen({ navigation ,route}) {
//   const [centers, setCenters] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredCenters, setFilteredCenters] = useState([]);
//   const { user_id } = route.params;
  
//   useEffect(() => {
//     const fetchCenters = async () => {
//       try {
//         const response = await axios.get('https://aef2-105-67-128-195.ngrok-free.app/appointments/centers');
//         setCenters(response.data);
//         setFilteredCenters(response.data);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des centres:', error);
//       }
//     };
//     fetchCenters();
//   }, []);

//   const handleSearch = () => {
//     const filtered = centers.filter(center =>
//       center.ville.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredCenters(filtered);
//   };
//   console.log("user_id envoyé au backend :", user_id); // Ajout de cette console

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Entrez une ville"
//         value={searchTerm}
//         onChangeText={text => setSearchTerm(text)}
//       />
//       <Button title="Rechercher" onPress={handleSearch} />
//       <FlatList
//         data={filteredCenters}
//         keyExtractor={item => item.id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.item}
            
//             onPress={() => navigation.navigate('Timeslots', { center_id: item.id , user_id})}
//           >
//             <Text style={styles.title}>{item.nom}</Text>
      
//             <Text style={styles.title}>{item.ville}</Text>
//             <Text style={styles.title}>{item.adresse}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//     paddingHorizontal: 10,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 24,
//   },
// });

// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
// import axios from 'axios';
// import { FontAwesome } from '@expo/vector-icons';
// import Footer from './Footer';

// export default function CentersScreen({ navigation ,route}) {
//   const [centers, setCenters] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredCenters, setFilteredCenters] = useState([]);
//   const { user_id } = route.params;
  
//   useEffect(() => {
//     const fetchCenters = async () => {
//       try {
//         const response = await axios.get('https://af00-102-52-136-247.ngrok-free.app/appointments/centers');
//         setCenters(response.data);
//         setFilteredCenters(response.data);
//       } catch (error) {
//         console.error('Erreur lors de la récupération des centres:', error);
//       }
//     };
//     fetchCenters();
//   }, []);

//   const handleSearch = () => {
//     const filtered = centers.filter(center =>
//       center.ville.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       center.adresse.toLowerCase().includes(searchTerm.toLowerCase()) || // Recherche dans toute l'adresse
//       center.adresse.toLowerCase().includes(` ${searchTerm.toLowerCase()}`) // Recherche spécifique dans l'adresse avec un espace avant le terme
//     );
//     setFilteredCenters(filtered);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.searchContainer}>
//         <FontAwesome name="search" size={24} color="#9C1941" style={styles.searchIcon} />
//         <TextInput
//           style={styles.input}
//           placeholder="Entrez une ville ou un quartier"
//           value={searchTerm}
//           onChangeText={text => setSearchTerm(text)}
//         />
//         <TouchableOpacity onPress={handleSearch}>
//           <FontAwesome name="arrow-right" size={24} color="#9C1941" style={styles.searchButton} />
//         </TouchableOpacity>
//       </View>
//       <FlatList
//         data={filteredCenters}
//         keyExtractor={item => item.id.toString()}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.item}
//             onPress={() => navigation.navigate('Timeslots', { center_id: item.id , user_id})}
//           >
//             <Text style={styles.title}>{item.nom}</Text>
//             <Text style={styles.subtitle}>{item.ville}</Text>
//             <Text style={styles.subtitle}>{item.adresse}</Text>
//           </TouchableOpacity>
//         )}
//         contentContainerStyle={styles.listContainer}
//       />
//       <Footer navigation={navigation} user_id={route.params.user_id} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 20,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//         marginTop: 20,

//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   searchButton: {
//     marginLeft: 10,
//   },
//   item: {
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     backgroundColor: '#FCCAD3',
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 5,
//     color: "#9C1941",
//   },
//   subtitle: {
//     fontSize: 18,
//   },
//   listContainer: {
//     paddingBottom: 80, // Padding en bas égal à la hauteur du footer
//   },
// });




import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';
import Footer from './Footer';

export default function CentersScreen({ navigation, route }) {
  const [centers, setCenters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCenters, setFilteredCenters] = useState([]);
  const { user_id } = route.params;

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const response = await axios.get('https://af00-102-52-136-247.ngrok-free.app/appointments/centers');
        setCenters(response.data);
        setFilteredCenters(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des centres:', error);
      }
    };
    fetchCenters();
  }, []);

  const handleSearch = (text) => {
    setSearchTerm(text);
    const filtered = centers.filter(center =>
      center.ville.toLowerCase().includes(text.toLowerCase()) ||
      center.adresse.toLowerCase().includes(text.toLowerCase()) ||
      center.adresse.toLowerCase().includes(` ${text.toLowerCase()}`)
    );
    setFilteredCenters(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Entrez une ville ou un quartier"
          value={searchTerm}
          onChangeText={handleSearch}
        />
      </View>
      <TouchableOpacity style={styles.searchButton} onPress={() => handleSearch(searchTerm)}>
        <FontAwesome name="search" size={24} color="#9C1941" />
      </TouchableOpacity>
      {filteredCenters.length === 0 && searchTerm.length > 0 && (
        <Text style={styles.noResults}>Aucun résultat trouvé.</Text>
      )}
      <FlatList
        data={filteredCenters}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Timeslots', { center_id: item.id, user_id })}
          >
            <Text style={styles.title}>{item.nom}</Text>
            <Text style={styles.subtitle}>{item.ville}</Text>
            <Text style={styles.subtitle}>{item.adresse}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContainer}
      />
      <Footer navigation={navigation} user_id={route.params.user_id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 40,
    width: '92%',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 35,
    borderRadius: 5,
  },
  searchButton: {
    position: 'absolute',
    right: 20,
    top: 10,
    marginTop: 35,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#FCCAD3',
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: "#9C1941",
  },
  subtitle: {
    fontSize: 18,
  },
  listContainer: {
    paddingBottom: 80, // Padding en bas égal à la hauteur du footer
  },
  noResults: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
});

