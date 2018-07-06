/**
 * Author: Himanshu Singh Teotia
 */

//initialize sequelize
const Sequelize = require('sequelize')
const op = Sequelize.Op

//Establish connection with database as shopdb
const db = new Sequelize('sql9246365', 'sql9246365', 'stTumc1t3S', {
    host: 'sql9.freemysqlhosting.net',
    dialect: 'mysql',
    operatorsAliases: op,
    pool: {
        min: 0,
        max: 5,
        idle: 5000,
    }
})
console.log('******************************************')
console.log('Established Database Connection')

//users table to store data from registration page
const User = db.define('users', {
    sid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: Sequelize.STRING,
    college: Sequelize.STRING,
    address: Sequelize.STRING,
    phone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})
console.log('******************************************')
console.log('User Table')

//listings table to store data from addlist page to add books in the store to sell
const Listing = db.define('listings', {
    lid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    bkname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    autname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imgname: Sequelize.STRING,
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cond: {
        type: Sequelize.ENUM,
        values: ['New', 'Almost New', 'Slight Damage', 'Damage', 'Worn'],
        allowNull: false
    }
})
console.log('******************************************')
User.hasMany(Listing);//establish primary key and foreign key relationship between users and listings
console.log('Listing Table')

//messages table to store messages from connect to seller functionality
const Message = db.define('messages', {
    msg: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
console.log('******************************************')
User.hasMany(Message);//establish primary key and foreign key relationship between users and messages
console.log('Message Table')

//users table to store wishes to buy books from add to wishlist functionality in listing page
const Wishlist = db.define('wishlists', {
    wid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
})
console.log('******************************************')
User.hasMany(Wishlist);//establish primary key and foreign key relationship between users and wishlist
Listing.hasMany(Wishlist)//establish primary key and foreign key relationship between listings and wishlists
console.log('Wishlist Table')

//synchronize the database
db.sync()
    .then(() => console.log("Database have been synced"))
    .catch((err) => console.error(err))
exports = module.exports = {
    User, Listing, Message, Wishlist, db
}
