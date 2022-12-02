const User = require('../models/user')

module.exports = function (router) {
    var usersRoute = router.route('/users')
    var usersIDRoute = router.route('/users/:id')

    // GET /users
    usersRoute.get(async (req, res) => {
        // ...
    })

    // POST /users
    usersRoute.post(async (req, res) => {
        // ...
    })

    // GET /users/:id
    usersIDRoute.get(async (req, res) => {
        // ...
    })

    // PUT /users/:id
    usersIDRoute.put(async (req, res) => {
        // ...
    })

    // DELETE /users/:id
    usersIDRoute.delete(async (req, res) => {
        // ...
    })
}
