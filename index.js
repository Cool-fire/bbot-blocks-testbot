const bot = require('bbot')

const { app } = require('./src/endpoint')

/** This is a workaround for Heroku to confirm web binding. */
// @todo Remove this when bBot includes Express (next release)
const http = require('http')
const handle = (req, res) => res.end('hitted')
const server = http.createServer(app)
server.listen(process.env.PORT || 5000)

/** Add your bot logic here. Removing the imported examples. */
require('./src/richmessages')
require('./src/endpoint')

bot.start() // 🚀
