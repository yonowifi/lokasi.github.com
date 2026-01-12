const mikrotik = require('../services/mikrotik.service')
exports.listUsers = async (req, res) => {
  try {
    const users = await mikrotik.getHotspotUsers()
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}