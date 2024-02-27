const express = require('express')
const router = express.Router()
const workingHours = require('../middleware/timecheck')

router.get('/', workingHours, (req,res) => {
    res.render('home')
})

router.get('/services', workingHours, (req,res) => {
    res.render('services')
})

router.get('/contact', workingHours, (req,res) => {
    res.render('contact')
})

module.exports = router;