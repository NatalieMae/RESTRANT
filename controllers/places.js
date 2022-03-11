const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router         //Is Router the reason that this will connect to the index.js file?