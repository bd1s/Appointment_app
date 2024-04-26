const express = require('express');

require('dotenv').config();
const app = express();
const Utilisateurs = require('./Utilisateurs'); // Importe les routes utilisateur
app.use(express.json());
app.use('/Utilisateurs', Utilisateurs); // Utilise les routes utilisateur

const appointments = require('./appointments');
app.use('/appointments', appointments);

app.get('/', (req, res) => {
  res.send('Bonjour le monde!');
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

