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
      <Text>Date : {appointment.date}</Text>
      <Text>Heure de début : {appointment.heure_debut}</Text>
      <Text>Heure de fin : {appointment.heure_fin}</Text>
      <Text>Centre : {appointment.center_nom}</Text>
      <Text>Adresse : {appointment.adresse}</Text>
      <Text>Nom : {appointment.name}</Text>
      <Text>Email : {appointment.email}</Text>
      <Text>Numéro de téléphone : {appointment.phone_number}</Text>
      {/* Bouton pour télécharger le PDF */}
      {pdfUri && (
        <Button
          title="Télécharger PDF"
          onPress={sharePdf}
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
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});
