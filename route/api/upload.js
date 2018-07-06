/**
 * Author: Himanshu Singh Teotia
 */

const express = require('express');
const route = express.Router();
var multer = require('multer');

let name = "";
//to store uploaded image on the disk storage
const multerConf = {
    storage: multer.diskStorage({
        destination: function (req, file, next) {
            next(null, './public/uploads')
        },
        filename: function (req, file, next) {
            const ext = file.mimetype.split('/')[1];
            next(null, name = (file.fieldname + '-' + Date.now() + '.' + ext))
        }
    }),
}

//Returns the file path with file name
route.post('/', multer(multerConf).single('image'), function (req, res, next) {
    res.json("/uploads/" + name)
})

module.exports = route;