/**
 * Author: Himanshu Singh Teotia
 */

const express = require('express');
const Listing = require('../../model/db.js').Listing;
const route = express.Router();

//Create book details entry after checking if any copy already there with various validation checks
route.post('/', (req, res) => {
    //Check if the user have already uploaded the same book
    Listing.findOne({
        where: {
            bkname: req.body.bkname,
            userSid: req.body.userSid
        }
    }).then((result) => {
        if (result == null) {
            //Check for any empty field entry
            if (req.body.bkname == null || req.body.autname == null || req.body.imgname == null || req.body.price == null || req.body.cond == null) {
                try {
                    throw "Need to fill all the fields."
                }
                catch (e) {
                    res.status(500).send(e)
                }
            }
            else {
                //Create book details entry in listings table
                Listing.create({
                    lid: parseInt(req.body.lid),
                    bkname: req.body.bkname,
                    autname: req.body.autname,
                    imgname: req.body.imgname,
                    price: parseInt(req.body.price),
                    cond: req.body.cond,
                    userSid: parseInt(req.body.userSid)
                }).then((user) => {
                    res.status(200).send(user)
                }).catch((error) => {
                    res.status(500).send("Need to fill valid data.")
                })
            }
        }
        else {
            try {
                throw "You have already entered this entry";
            }
            catch (e) {
                res.status(500).send(e)
            }
        }
    })
})

module.exports = route;