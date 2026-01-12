const router = require('express').Router()
const controller = require('../controllers/hotspot.controller')
router.get('/users', controller.listUsers)
module.exports = router