const MikroNode = require('mikronode-ng').MikroNode
exports.getHotspotUsers = async () => {
  const device = new MikroNode(process.env.MIKROTIK_HOST, process.env.MIKROTIK_PORT)
  const conn = await device.connect(process.env.MIKROTIK_USER, process.env.MIKROTIK_PASS)
  const channel = conn.openChannel()
  const data = await channel.write('/ip/hotspot/user/print')
  conn.close()
  return data
}