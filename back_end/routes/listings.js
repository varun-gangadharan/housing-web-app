const Listing = require('../models/listing')

module.exports = function (router) {
    var listingsRoute = router.route('/listings')
    var listingsIDRoute = router.route('/listings/:id')

    // GET /listings
    listingsRoute.get(async (req, res) => {
        // ...
    })

    // POST /listings
    listingsRoute.post(async (req, res) => {
        // ...
    })

    // GET /listings/:id
    listingsIDRoute.get(async (req, res) => {
        // ...
    })

    // PUT /listings/:id
    listingsIDRoute.put(async (req, res) => {
        // ...
    })

    // DELETE /listings/:id
    listingsIDRoute.delete(async (req, res) => {
        // ...
    })
}
