// seed.js will be run by npm run seed
const mongoose = require('mongoose')
const Golfer = require('./golfer')
const db = require('../../config/db')


const startGolfers = [
    { name: 'Tiger Woods', tour: 'PGA', tenure: 27},
    { name: 'Dustin Johnson', tour: 'LIV', tenure: 10},
    { name: 'Rory McIlroy', tour: 'PGA', tenure: 3},
    { name: 'Phil Mickelson', tour: 'LIV', tenure: 1}
]

// firs tconnect ot db. remove all pets. add starter golfers. always close connection to db regardless

mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        Golfer.deleteMany()
            .then(deletedGolfers => {
                console.log('the deleted golfers', deletedGolfers)
                Golfer.create(startGolfers)
                    .then(newGolfers => {
                        console.log('the new golfers', newGolfers)
                        mongoose.connection.close()
                    })
                    .catch(error => {
                        console.log(error)
                        mongoose.connection.close()
                    })
            })
            .catch(error => {
                console.log(error)
                mongoose.connection.close()
            })
    })
    .catch(error => {
        console.log(error)
        mongoose.connection.close()
    })