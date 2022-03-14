const router = require('express').Router()

router.get('/', (req, res) => {
    let places =  [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: './images/ThaiCrabs.jpg'
      }, {
        name: 'Coding Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: './images/BasketCookieswcoffee.jpg'
      }]
    res.render('places/index', { places })
})

module.exports = router      