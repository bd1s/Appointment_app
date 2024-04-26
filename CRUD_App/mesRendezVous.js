// const express = require('express');
// const connection = require('./bdd');
// const router = express.Router();

// // Endpoint pour obtenir les rendez-vous de l'utilisateur
// router.get('/appointments/:user_id', (req, res) => {
//     const user_id = req.params.user_id;
//     console.log("Requête GET pour les rendez-vous de l'utilisateur avec l'ID :", user_id);
//     connection.query('SELECT * FROM rendez_vous WHERE user_id = ?', [user_id], (err, results) => {
//       if (err) {
//         console.error('Erreur lors de la récupération des rendez-vous de l\'utilisateur:', err);
//         res.status(500).send('Erreur lors de la récupération des rendez-vous de l\'utilisateur');
//         return;
//       }
//       console.log('Rendez-vous récupérés avec succès :', results);
//       res.status(200).json(results);
//     });
// });

// module.exports = router;
