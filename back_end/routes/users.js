const User = require('../models/user')

module.exports = function (router) {
    var usersRoute = router.route('/users')
    var usersIDRoute = router.route('/users/:id')

    // GET /users
    usersRoute.get(async (req, res) => {
        const query = req.query.where === undefined ? undefined : JSON.parse(req.query.where)
        const skip = req.query.skip === undefined ? 0 : parseInt(req.query.skip)
        const limit = req.query.limit === undefined ? null : parseInt(req.query.limit)
        const sort = req.query.sort === undefined ? undefined : JSON.parse(req.query.sort)

        try {
            const users = await User.find(query).sort(sort).skip(skip).limit(limit)
            return res.status(200).json({ message: 'Retrieved list of users', data: users })
        } catch (err) {
            return res.status(500).json({ message: 'Server error', data: '' })
        }

    })

    // POST /users
    usersRoute.post(async (req, res) => {
        if (req.body.email === undefined) {
            return res.status(400).json({ message: 'Email missing', data: '' })
        }
        if (req.body.firstName === undefined) {
            return res.status(400).json({ message: 'First name missing', data: '' })
        }
        if (req.body.lastName === undefined) {
            return res.status(400).json({ message: 'Last name missing', data: '' })
        }
        if (req.body.password === undefined) {
            return res.status(400).json({ message: 'Password missing', data: '' })
        }
        if (req.body.phoneNumber === undefined) {
            return res.status(400).json({ message: 'Phone number missing', data: '' })
        }

        const user = new User({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber
        })
        
        try {
            const exists = await User.exists({ email: user.email })
            if (exists) {
                return res.status(400).json({ message: 'User with email ' + user.email + ' already exists', data: '' })
            }

            const newUser = await user.save()
            return res.status(201).json({ message: 'User successfully created', data: newUser })
        } catch (err) {
            return res.status(500).json({ message: 'Server error', data: '' })
        }

    })

    // GET /users/:id
    usersIDRoute.get(async (req, res) => {
        const userId = req.params.id

        const user = await User.findById(userId)

        try {
            if (user === null) {
                return res.status(404).json({ message: 'User not found', data: '' })
            } else {
                return res.status(200).json({ message: 'Retrieved user', data: user })
            }
        } catch (err) {
            return res.status(500).json({ message: 'Server error', data: '' })
        }
    })

    // PUT /users/:id
    usersIDRoute.put(async (req, res) => {
        const userId = req.params.id
    })

    // DELETE /users/:id
    usersIDRoute.delete(async (req, res) => {
        const userId = req.params.id

        try {
            const user = await User.findById(userId)
            if (user === null) {
                return res.status(404).json({ message: 'User not found', data: '' })
            }

            await User.deleteOne({ _id: userId })
            
            return res.status(200).json({ message: 'User successfully deleted', data: '' })
        } catch (err) {
            return res.status(500).json({ message: 'Server error', data: '' })
        }

    })
}
