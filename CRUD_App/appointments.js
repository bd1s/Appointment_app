
const express = require('express');
const connection = require('./bdd');
const router = express.Router();
router.get('/appointments/user/:user_id', (req, res) => {
  const user_id = req.params.user_id;
  console.log("Requête GET pour les rendez-vous de l'utilisateur avec l'ID :", user_id);
  connection.query(`
    SELECT 
      rendez_vous.id AS id, 
      rendez_vous.date AS date, 
      rendez_vous.name AS name, 
      rendez_vous.email AS email, 
      rendez_vous.phone_number AS phone_number,
      rendez_vous.status AS status,
      rendez_vous.ordre AS ordre, 
      centres_sante.nom AS center_nom, 
      centres_sante.adresse AS adresse, 
      creneaux.heure_debut AS heure_debut, 
      creneaux.heure_fin AS heure_fin
    FROM 
      rendez_vous 
    INNER JOIN 
      creneaux ON rendez_vous.timeslot_id = creneaux.id 
    INNER JOIN 
      centres_sante ON rendez_vous.center_id = centres_sante.id 
    WHERE 
      rendez_vous.user_id = ?`, [user_id], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des rendez-vous de l\'utilisateur:', err);
      res.status(500).send('Erreur lors de la récupération des rendez-vous de l\'utilisateur');
      return;
    }
    console.log('Rendez-vous récupérés avec succès :', results);
    res.status(200).json(results);
  });
});



// Endpoint annuler Rdv
router.delete('/appointments/:id', (req, res) => {
  const appointmentId = req.params.id;

  console.log('ID du rendez-vous à annuler :', appointmentId);
  connection.query('DELETE FROM rendez_vous WHERE id = ?', [appointmentId], (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'annulation du rendez-vous :', err);
      res.status(500).send('Erreur lors de l\'annulation du rendez-vous');
      return;
    }

    console.log('Rendez-vous annulé avec succès.');
    res.status(200).send('Rendez-vous annulé avec succès.');
  });
});

// Fonction pour récupérer la liste des centres de santé disponibles
router.get('/centers', (req, res) => {
  connection.query('SELECT * FROM centres_sante', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des centres de santé:', err);
      res.status(500).send('Erreur lors de la récupération des centres de santé');
      return;
    }
    res.status(200).json(results);
  });
});

// Fonction pour récupérer les créneaux horaires disponibles pour un centre de santé donné
router.get('/timeslots/:center_id', (req, res) => {
  const center_id = req.params.center_id;
  connection.query('SELECT * FROM creneaux WHERE center_id = ? ', [center_id], (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des créneaux horaires:', err);
      res.status(500).send('Erreur lors de la récupération des créneaux horaires');
      return;
    }
    res.status(200).json(results);
  });
});


router.get('/blood-requests', (req, res) => {
  console.log("Requête GET pour obtenir toutes les demandes de don de sang approuvées");
  connection.query(`
    SELECT
      id,
      nom_demandeur,
      groupe_sanguin,
      date_demande,
      contact_demandeur,
      ville_demandeur,
      commentaire,
      hopital_du_demandeur,
      adresse_hopital_du_demandeur
    FROM
      demandes_don_sang
    WHERE
      status = 'Approuvée'
    ORDER BY
      date_demande DESC
  `, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des demandes de don de sang:', err);
      res.status(500).send('Erreur lors de la récupération des demandes de don de sang');
      return;
    }
    console.log('Demandes de don de sang approuvées récupérées avec succès :', results);
    res.status(200).json(results);
  });
});



// Endpoint pour ajouter une demande de don de sang
router.post('/add-blood-request', (req, res) => {
  const { nom_demandeur, groupe_sanguin, date_demande, contact_demandeur, ville_demandeur, commentaire, hopital_du_demandeur, adresse_hopital_du_demandeur } = req.body;

  // Vérification des données obligatoires
  if (!nom_demandeur || !groupe_sanguin || !date_demande || !contact_demandeur || !ville_demandeur || !hopital_du_demandeur || !adresse_hopital_du_demandeur) {
    return res.status(400).json({ message: 'Veuillez fournir toutes les informations nécessaires.' });
  }

  // Insertion de la demande de don de sang dans la base de données
  connection.query('INSERT INTO demandes_don_sang (nom_demandeur, groupe_sanguin, date_demande, contact_demandeur, ville_demandeur, commentaire, hopital_du_demandeur, adresse_hopital_du_demandeur) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
    [nom_demandeur, groupe_sanguin, date_demande, contact_demandeur, ville_demandeur, commentaire, hopital_du_demandeur, adresse_hopital_du_demandeur], 
    (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'ajout de la demande de don de sang:', err);
        return res.status(500).json({ message: 'Erreur lors de l\'ajout de la demande de don de sang.' });
      }
      console.log('Demande de don de sang ajoutée avec succès.');
      res.status(201).json({ message: 'Demande de don de sang ajoutée avec succès.' });
    }
  );
});

// Fonction pour prendre un rendez-vous
router.post('/appointments', (req, res) => {
  const { user_id, center_id, timeslot_id, date, name, email, phone_number } = req.body;
  console.log("Données reçues du frontend : ", req.body);

  // Vérifier si l'utilisateur a déjà un rendez-vous à la même date
  console.log('user_id envoyé au backend :', user_id);
  console.log('date envoyé au backend  :', date); // Ajout du message de vérification

  connection.query('SELECT COUNT(*) AS existingAppointments FROM rendez_vous WHERE user_id = ? AND DATE(date) = ?', [user_id, date], (err, existingAppointmentResults) => {
    if (err) {
      console.error('Erreur lors de la vérification des rendez-vous existants :', err);
      res.status(500).send('Erreur lors de la vérification des rendez-vous existants');
      return;
    }

    const existingAppointments = existingAppointmentResults[0].existingAppointments;

    console.log('Résultat de la vérification des rendez-vous existants :', existingAppointmentResults);

    if (existingAppointments > 0) {
      // Si l'utilisateur a déjà un rendez-vous à la même date, renvoyer une erreur
      res.status(400).send("L'utilisateur a déjà un rendez-vous à la même date.");
      console.error('Utilisateur a déjà un rendez-vous à la même date');

      return;
    } else {
      // Check the current number of appointments for the given center and timeslot
      connection.query('SELECT COUNT(*) AS total FROM rendez_vous WHERE center_id = ? AND timeslot_id = ? AND DATE(date) = ?', [center_id, timeslot_id,date], (err, countResults) => {
        if (err) {
          console.error('Erreur lors de la vérification de la capacité:', err);
          res.status(500).send('Erreur lors de la vérification de la capacité');
          return;
        }

        const totalAppointments = countResults[0].total;
        const order = totalAppointments + 1; // Increment by 1 to get the next order


        // Get the maximum capacity of the center
        connection.query('SELECT capacite FROM centres_sante WHERE id = ?', [center_id], (err, capResults) => {
          if (err) {
            console.error('Erreur lors de la récupération de la capacité maximale:', err);
            res.status(500).send('Erreur lors de la récupération de la capacité maximale');
            return;
          }

          if (capResults.length === 0) {
            console.error('Aucun centre trouvé avec cet ID:', center_id);
            res.status(404).send('Aucun centre trouvé avec cet ID');
            return;
          }

          const capaciteMaximale = capResults[0].capacite;

          // Decide the status based on the capacity and current bookings
          let status = totalAppointments < capaciteMaximale ? 'validé' : 'en attente';

          // Insert the appointment with the determined status
          connection.query('INSERT INTO rendez_vous (user_id, center_id, status, timeslot_id, date, name, email, phone_number, ordre) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [user_id, center_id, status, timeslot_id, date, name, email, phone_number, order], (err, insertResult) => {
            if (err) {
              console.error('Erreur lors de la prise de rendez-vous:', err);
              res.status(500).send('Erreur lors de la prise de rendez-vous');
              return;
            }
            // Response based on status
            if (status === 'validé') {
              res.status(201).send('Rendez-vous pris et confirmé avec succès.');
            } else {
              res.status(202).send('Rendez-vous en attente de confirmation.');
            }
            console.log("Données reçues du frontend : ", req.body);

            // Afficher les valeurs des variables
            console.log("user_id :", user_id);
            console.log("center_id :", center_id);
            console.log("timeslot_id :", timeslot_id);
            console.log("date :", date);

          });
        });
      });
    }
  });
});



module.exports = router;
