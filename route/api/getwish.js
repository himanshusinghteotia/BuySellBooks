/**
 * Author: Himanshu Singh Teotia
 */

const express = require('express');
const route = express.Router();
const db = require('../../model/db.js').db;

//Receive bookid and returns corresponding book's detail after creating a join in wishlist and listing table on the usersid column
route.post('/', (req, res) => {
	db.query("select l.lid,l.bkname,l.autname,l.imgname,l.cond,l.price from wishlists w, listings l where w.userSid=" + req.body.id + " and w.listingLid=l.lid").spread((results, metadata) => {
		res.status(200).send(results)
	});
})

module.exports = route;