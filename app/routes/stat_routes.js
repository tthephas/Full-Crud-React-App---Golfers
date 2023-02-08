// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examples
const Golfer = require('../models/golfer')

//custom middleware
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const golfer = require('../models/golfer')
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// ROUTES
// POST / STATS / GOLFER ID
// POST -create a stat
router.post('/stats/:golferId', removeBlanks, (req, res, next) => {
    const stat = req.body.stat
    const golferId = req.params.golferId

    Golfer.findById(golferId)
        .then(handle404)
        .then(golfer => {
            console.log('the golfer ', golfer)
            console.log('the stat ', stat)

            golfer.stats.push(stat)
            return golfer.save()
        })
        .then(golfer => res.status(201).json({ golfer: golfer }))
        .catch(next)
})

//PATCH
// PATCH / STATS / GOLFER ID / STAT ID

router.patch('/stats/:golferId/:statId', requireToken, removeBlanks, (req, res, next) => {
    const statId = req.params.statId
    const golferId = req.params.golferId

    Golfer.findById(golferId)
        .then(handle404)
        .then((golfer) => {
            const theStat = golfer.stats.id(statId)
            requireOwnership(req, golfer)
            theStat.set(req.body.stat)
            return golfer.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

//DELETE
// DELETE / STATS / GOLFER ID / STAT ID

router.delete('/stats/:golferId/:statId', requireToken, (req, res, next) => {
    const statId = req.params.statId
    const golferId = req.params.golferId

    Golfer.findById(golferId)
        .then(handle404)
        .then((golfer) => {
            const theStat = golfer.stats.id(statId)
            requireOwnership(req, golfer)
            theStat.remove()
            return golfer.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// export our router
module.exports = router

