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

// import React, { useState } from 'react';
// import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';
// import { FontAwesome } from '@expo/vector-icons';


// const Connexion = () => {
//     const [email, setEmail] = useState('');
//     const [mdp, setMotDePasse] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [errorMessage, setErrorMessage] = useState('');
//     const navigation = useNavigation();

//     const handleCreateAccount = () => {
//         navigation.navigate('Register');
//     };

//     const handleSubmit = () => {
//         // Vérifier si email et mdp sont non vides
//         if (email.trim() === '' || mdp.trim() === '') {
//             setErrorMessage('Veuillez remplir tous les champs.');
//             return;
//         }

//         axios.post('https://af00-102-52-136-247.ngrok-free.app/Utilisateurs/login', {
//             email,
//             mdp
//         })
//         .then(response => {
//             console.log('utilisateur connecté avec succès:', response.data);
//             const { token, user_id } = response.data;
//             navigation.navigate('Home', { user_id, token });
//         })
//         .catch(error => {
//             console.log('Erreur lors de la connexion:', error);
//             setErrorMessage('Email ou mot de passe incorrect');
//         });
//     };

//     const handleClearErrorMessage = () => {
//         if (errorMessage) {
//             setErrorMessage('');
//         }
//     };

//     return (
//         <View>

//             <TextInput
//                 style={styles.input}
//                 placeholder='Email'
//                 value={email}
//                 onChangeText={text => setEmail(text)}
//                 onFocus={handleClearErrorMessage}
//             />

//             <View style={styles.passwordContainer}>
//                 <TextInput
//                     style={styles.passwordInput}
//                     placeholder='Mot de passe'
//                     value={mdp}
//                     onChangeText={text => setMotDePasse(text)}
//                     secureTextEntry={!showPassword}
//                     onFocus={handleClearErrorMessage}
//                 />
//                 <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
//                     <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={24} color="black" />
//                 </TouchableOpacity>
//             </View>

//             {errorMessage ? <Text style={[styles.errorMessage, { color: 'red' }]}>{errorMessage}</Text> : null}

//             <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//                 <Text style={styles.buttonText}>Se connecter</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.link} onPress={handleCreateAccount}>
//                 <Text style={styles.linkText}>Créer un compte</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('ResetPasswordScreen')}>
//                 <Text style={styles.linkText}>Mot de passe oublié ?</Text>
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
//     link: {
//         alignItems: 'center',
//         marginBottom: 10,
//     },
//     linkText: {
//     color: '#007bff',
//     fontSize: 16,
//     },
//     errorMessage: {
//         marginBottom: 10,
// },
// });

// export default Connexion;




import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Image, ImageBackground } from 'react-native';
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
        if (email.trim() === '' || mdp.trim() === '') {
            setErrorMessage('Veuillez remplir tous les champs.');
            return;
        }

        axios.post('https://af00-102-52-136-247.ngrok-free.app/Utilisateurs/login', {
            email,
            mdp
        })
        .then(response => {
            const { token, user_id } = response.data;
            navigation.navigate('Home', { user_id, token });
        })
        .catch(error => {
            setErrorMessage('Email ou mot de passe incorrect');
        });
    };

    const handleClearErrorMessage = () => {
        if (errorMessage) {
            setErrorMessage('');
        }
    };

    return (
        <ImageBackground source={require('../assets/bgimg.png')} style={styles.container} resizeMode='cover'>
            <Image
                style={styles.logo}
                source={require('../assets/logo.png')}
            />
            <Text style={styles.title}>WellWave</Text> 
            <Text style={styles.subtitle}>Connectez-vous pour commencer</Text>

            <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={text => setEmail(text)}
                onFocus={handleClearErrorMessage}
            />

            <View style={styles.passwordContainer}>
                <TextInput
                    style={styles.passwordInput}
                    placeholder='Mot de passe'
                    placeholderTextColor="#aaa"
                    value={mdp}
                    secureTextEntry={!showPassword}
                    onChangeText={text => setMotDePasse(text)}
                    onFocus={handleClearErrorMessage}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                    <FontAwesome name={showPassword ? "eye-slash" : "eye"} size={24} color="#aaa" />
                </TouchableOpacity>
            </View>

            {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={handleCreateAccount}>
                <Text style={styles.linkText}>Créer un compte</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('ResetPasswordScreen')}>
                <Text style={styles.linkText}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        paddingTop: -50, // Ajuster ici pour déplacer le tout vers le haut
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 0, // Réduire l'espace entre le logo et le titre
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 100,
        color: '#9C1941',

    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#aaa',
        marginBottom: 40,
    },
    input: {
        padding: 10,
        fontSize: 18,
        borderRadius: 20,
        backgroundColor: '#fff',
        marginBottom: 20,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
       
        borderRadius: 20,
        backgroundColor: '#fff',
        marginBottom: 40,
    },
    passwordInput: {
        flex: 1,
        padding: 10,
        fontSize: 18,
    },
    eyeIcon: {
        padding: 10,
    },
    button: {
        backgroundColor: '#9C1941',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    link: {
        alignItems: 'center',
        marginBottom: 10,
    },
    linkText: {
        color: '#A6868E',
        fontSize: 16,
    },
    errorMessage: {
        color: 'red',
        marginBottom: 20,
        textAlign: 'center',
    },
});

export default Connexion;
