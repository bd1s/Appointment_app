const express = require('express');
const connection = require('./bdd');
const { generateToken } = require('./auth');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
  const { nom, prenom, email, mdp, tele } = req.body;
  bcrypt.hash(mdp, 10, (err, hash) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors du hashage du mot de passe');
    } else {
      const newUser = { nom, prenom, email, mdp: hash, tele };
      const sql = 'INSERT INTO utilisateurs SET ?';
      connection.query(sql, newUser, (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).send('Erreur lors de la création de l\'utilisateur');
        } else {
          res.status(201).send('Utilisateur créé avec succès');
        }
      });
    }
  });
});

router.post('/login', (req, res) => {
  const { email, mdp } = req.body;
  const sql = 'SELECT * FROM utilisateurs WHERE email = ?';
  connection.query(sql, [email], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erreur lors de la récupération de l\'utilisateur');
    } else {
      if (result.length === 0) {
        res.status(401).send('Utilisateur non trouvé');
      } else {
        const user = result[0];
        bcrypt.compare(mdp, user.mdp, (err, same) => {
          if (err) {
            console.error(err);
            res.status(500).send('Erreur lors de la comparaison des mots de passe');
          } else {
            if (same) {
              const token = jwt.sign({ email: user.email }, 'hS1245@');
              res.status(200).json({ token , user_id: user.id});
            } else {
              res.status(401).send('Mot de passe incorrect');
            }
          }
        });
      }
    }
  });
});

// Endpoint pour obtenir tous les utilisateurs
router.get('/all', (req, res) => {
  connection.query('SELECT * FROM utilisateurs', (err, results) => {
      if (err) {
          console.error('Erreur lors de la récupération des utilisateurs:', err);
          res.status(500).send('Erreur lors de la récupération des utilisateurs');
          return;
      }
      res.status(200).json(results);
  });
});

module.exports = router;
