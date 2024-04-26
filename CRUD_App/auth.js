// auth.js
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Utilise la clé secrète pour signer le token
};

module.exports = {
  generateToken,
};

