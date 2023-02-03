const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const User = require('../models/user');


const getUsers = async (req, res, next) => {
    let users
    try {
        users = await User.find({}, '-password')
    } catch(err) {
        const error = new HttpError('fetching users failed, please try again', 500);
        return next(error);
    }
    res.json({ users: users.map(user => user.toObject({ getters: true })) });
}

const createNewUser = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log(errors);
        return next(new HttpError('Create user unsuccessful, try again.', 422))
    }

    const {name, email, password, role} = req.body

    let existingUser
    try {
        existingUser = await User.findOne({ email: email })    
    } catch(err) {
        const error = new HttpError('Create user unsuccessful, try again.', 500);
        return next(error);
    }

    if (existingUser) {
        const error = new HttpError('A user with this email address already exists.', 422);
        return next(error);
      }

    const createdUser = new User({
        name,
        email,
        password,
        role
    })

    try {
        await createdUser.save();
      } catch (err) {
        const error = new HttpError('Create user failed, please try again.', 500);
        return next(error);
      }
    
      res.status(201).json({ user: createdUser.toObject({ getters: true }) });

}

const login = async (req, res, next) => {
    const { email, password } = req.body

    let existingUser
    try {
        existingUser = await User.findOne({ email: email });
      } catch (err) {
        const error = new HttpError('Login failed, Try again later.', 500);
        return next(error);
      }

    if (!existingUser || existingUser.password !== password) {
        const error = new HttpError(
          'Invalid credentials, could not log you in',
          401
        );
        return next(error);
      }
      res.json({ message: 'Logged In' });
}
exports.getUsers = getUsers
exports.createNewUser = createNewUser;
exports.login = login;
