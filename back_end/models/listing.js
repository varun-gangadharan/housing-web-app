var mongoose = require('mongoose')

var ListingSchema = new mongoose.Schema({
    price: {
        type: Number
    },
    location: {
        type: String
    },
    bedrooms: {
        type: Number
    },
    bathrooms: {
        type: Number
    },
    utilities: [{
        type: Number
    }],
    amenities: [{
        type: Number
    }],
    squareFootage: {
        type: Number
    },
    company: {
        type: Number
    },
    policies: [{
        type: Number
    }],
    housingType: {
        type: Number
    },
    vacancy: {
        type: Boolean
    },
    picture: {
        type: String
    }
})

module.exports = mongoose.model('Listing', ListingSchema)
