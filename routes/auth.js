// routes/auth.js

const express = require('express');
const router = express.Router();
const { registerUser, loginUser, registerValidation, loginValidation } = require('../controllers/authController');

router.post('/signup', registerValidation, registerUser);

router.post('/login', loginValidation, loginUser);

module.exports = router;


