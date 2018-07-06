/**
 * Author: Himanshu Singh Teotia
 */

const express = require('express');
const Message = require('../../model/db.js').Message;
const route = express.Router();

//Create message entry in messages table after checking if user have send that message
route.post('/', (req, res) => {
    //Checks if the message is already send by the user to the seller
    Message.findOne({
        where: {
            msg: req.body.msg,
            userSid: req.body.sid
        }
    }).then((result) => {
        if (result == null) {
            //Create a new entry in the messages table
            Message.create({
                msg: req.body.msg,
                userSid: req.body.sid
            }).then((message) => {
                res.status(200).send(message)
            }).catch((error) => {
                res.status(500).send({
                    error
                })
            })
        }
        else {
            try {
                throw "You have already send this message to the seller.";
            }
            catch (e) {
                res.status(500).send(e)
            }
        }
    })
})

module.exports = route;