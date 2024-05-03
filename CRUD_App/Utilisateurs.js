
const express = require('express');
const connection = require('./bdd');
const { generateToken } = require('./auth');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer'); // Import de nodemailer pour l'envoi d'e-mails



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
        res.status(401).send('Email ou mot de passe incorrect');
      } else {
        const user = result[0];
        bcrypt.compare(mdp, user.mdp, (err, same) => {
          if (err) {
            console.error(err);
            res.status(500).send('Erreur lors de la comparaison des mots de passe');
          } else {
            if (same) {
              const token = jwt.sign({ email: user.email }, 'hS1245@');
              res.status(200).json({ token, user_id: user.id });
            } else {
              res.status(401).send('Email ou mot de passe incorrect');
            }
          }
        });
      }
    }
  });
});

router.post('/resetPassword', (req, res) => {
  const { email } = req.body;
  console.log('Email reçu:', email);

  const checkUserQuery = 'SELECT * FROM utilisateurs WHERE email = ?';
  connection.query(checkUserQuery, [email], (err, result) => {
    if (err) {
      console.error('Erreur lors de la vérification de l\'utilisateur:', err);
      res.status(500).send('Erreur lors de la vérification de l\'utilisateur');
    } else {
      if (result.length === 0) {
        res.status(404).send('Utilisateur non trouvé');
      } else {
        const newPassword = Math.random().toString(36).slice(-8);
        console.log('Nouveau mot de passe généré:', newPassword);

        bcrypt.hash(newPassword, 10, (err, hash) => {
          if (err) {
            console.error('Erreur lors du hashage du nouveau mot de passe:', err);
            res.status(500).send('Erreur lors du hashage du nouveau mot de passe');
          } else {
            const updatePasswordQuery = 'UPDATE utilisateurs SET mdp = ? WHERE email = ?';
            connection.query(updatePasswordQuery, [hash, email], (err, result) => {
              if (err) {
                console.error('Erreur lors de la réinitialisation du mot de passe:', err);
                res.status(500).send('Erreur lors de la réinitialisation du mot de passe');
              } else {
                const transporter = nodemailer.createTransport({
                  service: 'gmail',
                  auth: {
                    user: '',
                    pass: ''
                  }
                });

                const mailOptions = {
                  from: '',
                  to: email,
                  subject: 'Réinitialisation du mot de passe',
                  text: `Votre nouveau mot de passe est : ${newPassword}. Assurez-vous de le changer dès que possible.`
                };

                transporter.sendMail(mailOptions, (err, info) => {
                  if (err) {
                    console.error('Erreur lors de l\'envoi de l\'e-mail de réinitialisation:', err);
                    res.status(500).send('Erreur lors de l\'envoi de l\'e-mail de réinitialisation');
                  } else {
                    console.log('E-mail de réinitialisation envoyé :', info.response);
                    res.status(200).send('E-mail de réinitialisation envoyé avec succès');
                  }
                });
              }
            });
          }
        });
      }
    }
  });
});

router.get('/all', (req, res) => {
  connection.query('SELECT * FROM utilisateurs', (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des utilisateurs:', err);
      res.status(500).send('Erreur lors de la récupération des utilisateurs');
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = router;
