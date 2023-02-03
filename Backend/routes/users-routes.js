const express = require('express');
const { check } = require('express-validator');
const userControllers = require('../controllers/users-controllers');

const router = express.Router();

router.get('/', userControllers.getUsers);
router.post(
  '/new',
    [check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 }),
    check('role').not().isEmpty()
  ],
  userControllers.createNewUser
);
router.post('/login',[
  check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 }),
], userControllers.login);


module.exports = router;
