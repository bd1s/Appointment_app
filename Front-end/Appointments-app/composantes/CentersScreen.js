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

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default function CentersScreen({ navigation ,route}) {
  const [centers, setCenters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCenters, setFilteredCenters] = useState([]);
  const { user_id } = route.params;
  
  useEffect(() => {
    const fetchCenters = async () => {
      try {
        const response = await axios.get('https://aef2-105-67-128-195.ngrok-free.app/appointments/centers');
        setCenters(response.data);
        setFilteredCenters(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des centres:', error);
      }
    };
    fetchCenters();
  }, []);

  const handleSearch = () => {
    const filtered = centers.filter(center =>
      center.ville.toLowerCase().includes(searchTerm.toLowerCase()) ||
      center.adresse.toLowerCase().includes(searchTerm.toLowerCase()) || // Recherche dans toute l'adresse
      center.adresse.toLowerCase().includes(` ${searchTerm.toLowerCase()}`) // Recherche spécifique dans l'adresse avec un espace avant le terme
    );
    setFilteredCenters(filtered);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Entrez une ville ou un quartier"
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
      />
      <Button title="Rechercher" onPress={handleSearch} />
      <FlatList
        data={filteredCenters}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('Timeslots', { center_id: item.id , user_id})}
          >
            <Text style={styles.title}>{item.nom}</Text>
            <Text style={styles.title}>{item.ville}</Text>
            <Text style={styles.title}>{item.adresse}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});

