// import React, {useState} from 'react';
// import {View, TextInput, StyleSheet, Button } from 'react-native';
// import axios from 'axios';

// import { useNavigation } from '@react-navigation/native';

// const Connexion = () => {
//     const [email, setEmail] =useState('');
//     const [mdp, setmotdepasse] =useState('');
//     const [showPassword, setshowPassword] = useState(false);
//     const navigation = useNavigation();

//     const handleCreateAccount = () => {
//       navigation.navigate('Register');
//     };
  

//     const handleSubmit = () => {
//         axios.post('https://aef2-105-67-128-195.ngrok-free.app/Utilisateurs/login', {
//             email,
//             mdp
//         })
//      .then(response => {
//         console.log('utilisateur connecté avec succés:', response.data);
//         const user_id = response.data.user_id;
//         // Naviguer vers la page Listecentres avec userId en tant que paramètre
//         navigation.navigate('Home',{user_id});
//      })
//      .catch(error => {
//         console.log('Erreur lors de la connexion:', error);
//      });
//     };


//     return (
//        <View>
//           <TextInput
//             style={styles.input}
//             placeholder='Email'
//             value={email}
//             onChangeText={text => setEmail(text)}
//           />

//          <TextInput
//             style={styles.input}
//             placeholder='Mot de passe'
//             value={mdp}
//             onChangeText={text => setmotdepasse(text)}
//             secureTextEntry={!showPassword}
//           />
//            <Button title={showPassword ? "Masquer mot de passe" :"Afficher mot de passe "} onPress={() => setshowPassword(!showPassword)} />
//            <Button title='Se connecter' onPress={handleSubmit}/>
//            <Button title='Creer un compte' onPress={handleCreateAccount}/>

//        </View>

//     );

// };


// const styles = StyleSheet.create({
//     input: {
//       borderWidth: 1,
//       borderColor: '#ccc',
//       padding: 10,
//       marginBottom: 10,
//     },
//   });

//   export default Connexion;




// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';
// import axios from 'axios';

// import { useNavigation } from '@react-navigation/native';

// const Connexion = () => {
//     const [email, setEmail] = useState('');
//     const [mdp, setMotDePasse] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const navigation = useNavigation();

//     const handleCreateAccount = () => {
//         navigation.navigate('Register');
//     };

//     const handleSubmit = () => {
//         axios.post('https://af00-102-52-136-247.ngrok-free.app/Utilisateurs/login', {
//             email,
//             mdp
//         })
//             .then(response => {
//                 console.log('utilisateur connecté avec succès:', response.data);
//                 const { token, user_id } = response.data;
//                 // Naviguer vers la page Listecentres avec userId en tant que paramètre
//                 navigation.navigate('Home', { user_id, token });
//             })
//             .catch(error => {
//                 console.log('Erreur lors de la connexion:', error);
//                 Alert.alert('', 'Email ou mot de passe incorrect');
//             });
//     };

//     return (
//         <View>
//             <TextInput
//                 style={styles.input}
//                 placeholder='Email'
//                 value={email}
//                 onChangeText={text => setEmail(text)}
//             />

//             <TextInput
//                 style={styles.input}
//                 placeholder='Mot de passe'
//                 value={mdp}
//                 onChangeText={text => setMotDePasse(text)}
//                 secureTextEntry={!showPassword}
//             />
//             <Button title={showPassword ? "Masquer mot de passe" : "Afficher mot de passe "} onPress={() => setShowPassword(!showPassword)} />
//             <Button title='Se connecter' onPress={handleSubmit} />
//             <Button title='Créer un compte' onPress={handleCreateAccount} />

//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 10,
//         marginBottom: 10,
//     },
// });

// export default Connexion;







// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, TouchableOpacity,Text, Alert } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';
// import { FontAwesome } from '@expo/vector-icons';

// const Connexion = () => {
//     const [email, setEmail] = useState('');
//     const [mdp, setMotDePasse] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const navigation = useNavigation();

//     const handleCreateAccount = () => {
//         navigation.navigate('Register');
//     };

//     const handleSubmit = () => {
//         axios.post('https://af00-102-52-136-247.ngrok-free.app/Utilisateurs/login', {
//             email,
//             mdp
//         })
//             .then(response => {
//                 console.log('utilisateur connecté avec succès:', response.data);
//                 const { token, user_id } = response.data;
//                 // Naviguer vers la page Listecentres avec userId en tant que paramètre
//                 navigation.navigate('Home', { user_id, token });
//             })
//             .catch(error => {
//                 console.log('Erreur lors de la connexion:', error);
//                 Alert.alert('', 'Email ou mot de passe incorrect');
//             });
//     };

//     return (
//         <View>
//             <TextInput
//                 style={styles.input}
//                 placeholder='Email'
//                 value={email}
//                 onChangeText={text => setEmail(text)}
//             />

//             <View style={styles.passwordContainer}>
//                 <TextInput
//                     style={styles.passwordInput}
//                     placeholder='Mot de passe'
//                     value={mdp}
//                     onChangeText={text => setMotDePasse(text)}
//                     secureTextEntry={!showPassword}
//                 />
//                 <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
//                     <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={24} color="black" />
//                 </TouchableOpacity>
//             </View>

//             <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//                 <Text style={styles.buttonText}>Se connecter</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
//                 <Text style={styles.buttonText}>Créer un compte</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     input: {
//         borderWidth: 1,
//         borderColor: '#ccc',
//         padding: 10,
//         marginBottom: 10,
//     },
//     passwordContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderWidth: 1,
//         borderColor: '#ccc',
//         marginBottom: 10,
//     },
//     passwordInput: {
//         flex: 1,
//         padding: 10,
//     },
//     eyeIcon: {
//         padding: 10,
//     },
//     button: {
//         backgroundColor: '#007bff',
//         padding: 15,
//         borderRadius: 5,
//         alignItems: 'center',
//         marginBottom: 10,
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 16,
//     },
// });

// export default Connexion;

import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

const Connexion = () => {
    const [email, setEmail] = useState('');
    const [mdp, setMotDePasse] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigation = useNavigation();

    const handleCreateAccount = () => {
        navigation.navigate('Register');
    };

    const handleSubmit = () => {
        axios.post('https://af00-102-52-136-247.ngrok-free.app/Utilisateurs/login', {
            email,
            mdp
        })
        .then(response => {
            console.log('utilisateur connecté avec succès:', response.data);
            const { token, user_id } = response.data;
            navigation.navigate('Home', { user_id, token });
        })
        .catch(error => {
            console.log('Erreur lors de la connexion:', error);
            setErrorMessage('Email ou mot de passe incorrect');
        });
    };

    const handleClearErrorMessage = () => {
        if (errorMessage) {
            setErrorMessage('');
        }
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={text => setEmail(text)}
                onFocus={handleClearErrorMessage}
            />

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder='Mot de passe'
                    value={mdp}
                    onChangeText={text => setMotDePasse(text)}
                    secureTextEntry={!showPassword}
                    onFocus={handleClearErrorMessage}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                    <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={24} color="black" />
                </TouchableOpacity>
            </View>

            {errorMessage ? <Text style={[styles.errorMessage, { color: 'red' }]}>{errorMessage}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={handleCreateAccount}>
                <Text style={styles.linkText}>Créer un compte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('ResetPasswordScreen')}>
                <Text style={styles.linkText}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
    },
    passwordInput: {
        flex: 1,
        padding: 10,
    },
    eyeIcon: {
        padding: 10,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    link: {
        alignItems: 'center',
        marginBottom: 10,
    },
    linkText: {
    color: '#007bff',
    fontSize: 16,
    },
    errorMessage: {
        marginBottom: 10,
    },
});

export default Connexion;
