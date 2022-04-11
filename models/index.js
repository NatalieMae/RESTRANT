require('dotenv').config()     //Houston We have a problem here Per Termiana
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
            },
        () => { console.log('connected to mongo: ', process.env.MONGO_URI) 
    } 
)

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')