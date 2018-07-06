/**
 * Author: Himanshu Singh Teotia
 */

const express = require('express');
const User = require('../../model/db.js').User;
const route = express.Router();

//Create user details after checking if the entered email is already registered
route.post('/', (req, res) => {
    //check if entered email is already registered
    User.findOne({
        where: {
            email: req.body.email,
        }
    }).then((result) => {
        if (result == null) {
            //check if user left some detail un entered
            if (req.body.name == "" || req.body.email == "" || req.body.college == "" || req.body.address == "" || req.body.phone == null || req.body.password == "") {
                error = "Enter data in all the fields.";
                res.status(500).send(error);
            }
            else {
                User.create({
                    sid: parseInt(req.body.sid),
                    name: req.body.name,
                    email: req.body.email,
                    college: req.body.college,
                    address: req.body.address,
                    phone: parseInt(req.body.phone),
                    password: req.body.password
                }).then((user) => {
                    if (user != null) {
                        res.status(200).send(user)
                    }
                    else {
                        try {
                            throw "You are not registered."
                        }
                        catch (e) {
                            res.status(500).send(error)
                        }
                    }
                })
            }
        }
        else {
            error = "This mail is already registered.";
            res.status(500).send(error)
        }
    })
})

module.exports = route;