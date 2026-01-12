const express = require('express')
const session = require('express-session')
const cors = require('cors')
const authRoutes = require('./routes/auth.routes')
const hotspotRoutes = require('./routes/hotspot.routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use('/api/auth', authRoutes)
app.use('/api/hotspot', hotspotRoutes)
module.exports = app