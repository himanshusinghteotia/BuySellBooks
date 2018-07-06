/**
 * Author: Himanshu Singh Teotia
 */

const express = require('express');
const Wishlist = require('../../model/db.js').Wishlist;
const route = express.Router();

//Create wish entry after check if that wish already exists
route.post('/', (req, res) => {
    //checks for already existing same wish
    Wishlist.findOne({
        where: {
            listingLid: parseInt(req.body.lid),
            userSid: parseInt(req.body.sid)
        }
    }).then((result) => {
        if (result == null) {
            //create wish to the wishlists table
            Wishlist.create({
                userSid: parseInt(req.body.sid),
                listingLid: parseInt(req.body.lid)
            }).then((user) => {
                res.status(200).send(user)
            }).catch((error) => {
                res.status(500).send({
                    error
                })
            })
        }
        else {
            try {
                throw "You have already entered this wish.";
            }
            catch (e) {
                res.status(500).send(e)
            }
        }
    })
})
module.exports = route;