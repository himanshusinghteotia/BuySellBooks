/**
 * Author: Himanshu Singh Teotia
 */

const express = require('express');
const User = require('../../model/db.js').User;
const route = express.Router();

//Receive email and password form the user check if they are registered users or not
route.post('/', (req, res) => {
  let mail = req.body.email;
  let pass = req.body.password;
  User.findOne({
    where: {
      email: mail,
      password: pass
    }
  }).then(function (user) {
    //check if the have entered both entries
    if (mail == "" || pass == "") {
      throw "Email and Password cannot be left empty.";
    }
    else if (user != null) {
      res.status(200).send(user);
    }
    else {
      throw "You are not registered Member.";
    }
  }).catch(function (error) {
    res.status(500).send(error);
  })
})

module.exports = route;