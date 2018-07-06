/**
 * Author: Himanshu Singh Teotia
 */
const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const path = require('path')

/*
//cors functionality
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
*/

app.use(express.json())
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))
app.use('/',express.static(path.join(__dirname, 'public')))

//api routes
app.use('/register', require('./route/api/register.js'))
app.use('/addlist', require('./route/api/addlist.js'))
app.use('/sendmsg', require('./route/api/sendmsg.js'))
app.use('/loadmsg', require('./route/api/loadmsg.js'))
app.use('/login', require('./route/api/login.js'))
app.use('/listing', require('./route/api/getlist.js'))
app.use('/addwish', require('./route/api/addwish.js'))
app.use('/getsingle', require('./route/api/getsingle.js'))
app.use('/getwish', require('./route/api/getwish.js'))
app.use('/upload', require('./route/api/upload.js'))

//port number to listen
app.listen(process.env.PORT || 2000, function () {
    console.log("Server started at http://localhost:2000")
})