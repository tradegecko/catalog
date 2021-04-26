/* jshint node:true */
/* eslint-env node */

module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();
  usersRouter.get('/current', function(req, res) {
    res.send({
      users: {
        id: Math.random(100),
        account_id: Math.random(100),
        login_id: Math.random(100)
      }
    });
  });
  app.use('/api/users', usersRouter);
};
