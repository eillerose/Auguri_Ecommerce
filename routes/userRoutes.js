const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

// User routes
router.post('/register', userController.registerUser);

module.exports = router;
