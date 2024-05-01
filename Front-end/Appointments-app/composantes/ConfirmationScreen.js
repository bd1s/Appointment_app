import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Button, Platform } from 'react-native';
import { printToFileAsync } from 'expo-print';
import * as Notifications from 'expo-notifications';
import { shareAsync } from 'expo-sharing';

export default function ConfirmationScreen({ route }) {
  const { appointment } = route.params;
  const [pdfUri, setPdfUri] = useState(null);

  useEffect(() => {
    generatePdf();
  }, []);

  const generatePdf = async () => {
    const htmlContent = `
      <html>
        <body>
          <h1>Votre réservation a été confirmée :</h1>
          <p>Date : ${appointment.date}</p>
          <p>Heure de début : ${appointment.heure_debut}</p>
          <p>Heure de fin : ${appointment.heure_fin}</p>
          <p>Centre : ${appointment.center_nom}</p>
          <p>Adresse : ${appointment.adresse}</p>
          <p>Nom : ${appointment.name}</p>
          <p>Email : ${appointment.email}</p>
          <p>Numéro de téléphone : ${appointment.phone_number}</p>
        </body>
      </html>
    `;

    const { uri } = await printToFileAsync({ html: htmlContent });
    setPdfUri(uri);
  };

  const sharePdf = async () => {
    if (pdfUri) {
      await shareAsync(pdfUri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Votre réservation a été confirmée :</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Date :</Text>
        <Text style={styles.infoText}>{appointment.date}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Heure de début :</Text>
        <Text style={styles.infoText}>{appointment.heure_debut}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Heure de fin :</Text>
        <Text style={styles.infoText}>{appointment.heure_fin}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Centre :</Text>
        <Text style={styles.infoText}>{appointment.center_nom}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Adresse :</Text>
        <Text style={styles.infoText}>{appointment.adresse}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Nom :</Text>
        <Text style={styles.infoText}>{appointment.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Email :</Text>
        <Text style={styles.infoText}>{appointment.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Numéro de téléphone :</Text>
        <Text style={styles.infoText}>{appointment.phone_number}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Votre ordre sera : {appointment.ordre}</Text>
      </View>
      {/* Bouton pour télécharger le PDF */}
      {pdfUri && (
        <Button
          title="Télécharger PDF"
          onPress={sharePdf}
          color="#9C1941"
          disabled={!pdfUri}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff', // Couleur de fond de l'écran
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:50,

    textAlign: 'center',
    color: '#9C1941', // Couleur du titre
  },
  infoContainer: {
    marginBottom: 10,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Couleur du titre d'information
  },
  infoText: {
    fontSize: 16,
    color: '#666', // Couleur du texte d'information
  },
});

