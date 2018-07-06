/**
 * Author: Himanshu Singh Teotia
 */

const express = require('express');
const Listing = require('../../model/db.js').Listing;
const route = express.Router();

//Receive bookid(lid) and return corresponding book details back
route.post('/', (req, res) => {
	Listing.findOne({
		where: {
			lid: req.body.id,
		}
	}).then((items) => {
		res.status(200).send(items)
	}).catch((err) => {
		res.status(500).send({
			error: "Could not retrive requested book."
		})
	})
});

module.exports = route;