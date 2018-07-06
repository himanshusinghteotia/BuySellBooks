/**
 * Author: Himanshu Singh Teotia
 */

const express = require('express');
const Listing = require('../../model/db.js').Listing;
const route = express.Router();

//Request all the book details entered in listings table for sale
route.get('/', (req, res, next) => {
	Listing.findAll()
		.then((items) => {
			res.status(200).send(items)
		}).catch((err) => {
			res.status(500).send({
				error: "Could not retrive books"
			})
		})
});

module.exports = route;