const { signup, login } = require('../Controllers/AuthController');
const { SignUpValidation, LoginValidation } = require('../Middlewares/AuthValidation');

const router = require('express').Router();

router.post('/login', LoginValidation, login)
router.post('/signup', SignUpValidation, signup)
module.exports = router;