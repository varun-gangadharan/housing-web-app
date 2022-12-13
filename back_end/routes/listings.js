const Listing = require('../models/listing')

module.exports = function (router) {
    var listingsRoute = router.route('/listings')
    var listingsIDRoute = router.route('/listings/:id')

    // GET /listings
    listingsRoute.get(async (req, res) => {
        const query = req.query.where === undefined ? undefined : JSON.parse(req.query.where)
        const skip = req.query.skip === undefined ? 0 : parseInt(req.query.skip)
        const limit = req.query.limit === undefined ? null : parseInt(req.query.limit)
        const sort = req.query.sort === undefined ? undefined : JSON.parse(req.query.sort)

        try {
            const listings = await Listing.find(query).sort(sort).skip(skip).limit(limit)
            return res.status(200).json({ message: 'Retrieved list of listings', data: listings })
        } catch (err) {
            return res.status(500).json({ message: 'Server error', data: '' })
        }
    })

    // POST /listings
    listingsRoute.post(async (req, res) => {
        if (req.body.price === undefined) {
            return res.status(400).json({ message: 'Price (number) missing', data: '' })
        }
        if (req.body.location === undefined) {
            return res.status(400).json({ message: 'Location (string) missing', data: '' })
        }
        if (req.body.bedrooms === undefined) {
            return res.status(400).json({ message: 'Number of bedrooms (number) missing', data: '' })
        }
        if (req.body.bathrooms === undefined) {
            return res.status(400).json({ message: 'Number of bathrooms (number) missing', data: '' })
        }
        if (req.body.utilities === undefined) {
            return res.status(400).json({ message: 'Utilities (enumeration list) missing', data: '' })
        }
        if (req.body.squareFootage === undefined) {
            return res.status(400).json({ message: 'Square footage (number) missing', data: '' })
        }
        if (req.body.company === undefined) {
            return res.status(400).json({ message: 'Company (enumeration) missing', data: '' })
        }
        if (req.body.housingType === undefined) {
            return res.status(400).json({ message: 'Housing Type (enumeration) missing', data: '' })
        }
        if (req.body.vacancy === undefined) {
            return res.status(400).json({ message: 'Vacancy (boolean) missing', data: '' })
        }

        const listing = new Listing({
            price: req.body.price,
            location: req.body.location,
            bedrooms: req.body.bedrooms,
            bathrooms: req.body.bathrooms,
            utilities: req.body.utilities,
            amenities: req.body.amenities,
            squareFootage: req.body.squareFootage,
            company: req.body.company,
            policies: req.body.policies,
            housingType: req.body.housingType,
            vacancy: req.body.vacancy,
            picture: req.body.picture
        })
        
        try {
            const exists = await Listing.exists({ location: listing.location })
            if (exists) {
                return res.status(400).json({ message: 'Listing with address ' + listing.location + ' already exists', data: '' })
            }

            const newListing = await listing.save()
            return res.status(201).json({ message: 'Listing successfully created', data: newListing })
        } catch (err) {
            return res.status(500).json({ message: 'Server error', data: '' })
        }
    })

    // GET /listings/:id
    listingsIDRoute.get(async (req, res) => {
        const listingId = req.params.id

        const listing = await Listing.findById(listingId)

        try {
            if (listing === null) {
                return res.status(404).json({ message: 'Listing not found', data: '' })
            } else {
                return res.status(200).json({ message: 'Retrieved listing', data: listing })
            }
        } catch (err) {
            return res.status(500).json({ message: 'Server error', data: '' })
        }
    })

    // PUT /listings/:id
    listingsIDRoute.put(async (req, res) => {
        const listingId = req.params.id

        try {
            const listing = await Listing.findById(listingId)
            if (listing === null) {
                return res.status(404).json({ message: 'Listing not found', data: '' })
            }
            
            if (req.body.price != undefined)            listing.price = req.body.price
            if (req.body.location != undefined)         listing.location = req.body.location
            if (req.body.bedrooms != undefined)         listing.bedrooms = req.body.bedrooms
            if (req.body.bathrooms != undefined)        listing.bathrooms = req.body.bathrooms
            if (req.body.utilities != undefined)        listing.utilities = req.body.utilities
            if (req.body.amenities != undefined)        listing.amenities = req.body.amenities
            if (req.body.squareFootage != undefined)    listing.squareFootage = req.body.squareFootage
            if (req.body.company != undefined)          listing.company = req.body.company
            if (req.body.policies != undefined)         listing.policies = req.body.policies
            if (req.body.housingType != undefined)      listing.housingType = req.body.housingType
            if (req.body.vacancy != undefined)          listing.vacancy = req.body.vacancy
            if (req.body.picture != undefined)          listing.picture = req.body.picture

            await listing.save()

            return res.status(200).json({ message: 'The listing was updated', data: listing })
        } catch (err) {
            return res.status(500).json({ message: 'Server error', data: '' })
        }
    })

    // DELETE /listings/:id
    listingsIDRoute.delete(async (req, res) => {
        const listingId = req.params.id

        try {
            const listing = await Listing.findById(listingId)
            if (listing === null) {
                return res.status(404).json({ message: 'Listing not found', data: '' })
            }

            await Listing.deleteOne({ _id: listingId })
            
            return res.status(200).json({ message: 'Listing successfully deleted', data: '' })
        } catch (err) {
            return res.status(500).json({ message: 'Server error', data: '' })
        }
    })

    return router
}
