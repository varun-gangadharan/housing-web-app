var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    password: {
        type: String
    },
    favorites: [{
        type: String
    }],
    phoneNumber: {
        type: String
    }
})

module.exports = mongoose.model('User', UserSchema)
