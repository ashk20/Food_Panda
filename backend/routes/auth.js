const express = require('express');
const router = express.Router();

const { signup, login, getAuthByName, getAuthByRole } = require('../controllers/auth');

router.post('/signup', signup);
// http://localhost:8000/api/signup

router.post('/login', login);
//http://localhost:8000/api/login

router.get('/:name', getAuthByName);
//http://localhost:8000/api/:name

router.get('/:role', getAuthByRole)
//http://localhost:8000/api/:role


module.exports = router;