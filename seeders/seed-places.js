
const db = require('./models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/public/images/ThaiBowl.jpg',
    founded: 1989
}, {
    name: 'Coding Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/public/images/BakeryCase.jpg',
    founded: 2020
}])

.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})