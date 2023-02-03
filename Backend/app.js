const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

const usersRoutes = require('./routes/users-routes');
const postRoutes = require('./routes/post-routes')
const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/blog/posts', postRoutes)


app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

mongoose
  .connect('mongodb+srv://julius-admin:H9vlQpCcM2hCWvkY@cluster0.mzozik7.mongodb.net/users?retryWrites=true&w=majority')
  .then(() => {
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });

