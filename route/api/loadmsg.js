/**
 * Author: Himanshu Singh Teotia
 */

const express = require('express');
const Message = require('../../model/db.js').Message;
const route = express.Router();

//Receive userid and return all corresponding messages back to the user messages page
route.post('/', (req, res) => {
    Message.findAll({
        where: {
            userSid: req.body.id,
        }
    }).then((messages) => {
        res.status(200).send(messages)
    }).catch((err) => {
        res.status(500).send({
            error: "Could not retrive Messages"
        })
    })
});

module.exports = route;