const bot = require('bbot')
const { driver, api } = require('@rocket.chat/sdk')
const rmsg = require('./richmessage')

const sendToRoom = async ({roomName = 'GENERAL', msg = 'Test for blocks' , attachments, blocks}) => {
 await driver.sendMessage({"rid":roomName, msg, attachments, blocks}) 
}



bot.global.text(/(hi|hello).*bots?/, (b) => b.respond('Hello :wave:'), {
  id: 'hello-bots'
})
bot.global.direct({
  contains: ['networking', 'social','socialize']
}, (b) => { sendToRoom({"roomName":b.user.room.id,msg:'There you Go',attachments: rmsg.button_attach})}, {
  id: 'social-direct'
})

//demo for send response object which initiates flow
bot.global.direct({
  contains: ['start flow', 'plan meeting']
}, (b) => { console.log(b); sendToRoom({"roomName":b.user.room.id,msg:'flow for starting response object',blocks:rmsg.block_date})}, {
  id: 'send-response'
})
//datepicker element
bot.global.direct({
  contains: ['datepicker element']
}, (b) => { console.log(b); sendToRoom({"roomName":b.user.room.id,msg:'Block element with datepicker',blocks:rmsg.block_date})}, {
  id: 'datepicker'
})

//overflow element
bot.global.direct({
  contains: ['overflow element']
}, (b) => { console.log(b); sendToRoom({"roomName":b.user.room.id,msg:'Block element with overflow',blocks:rmsg.block_farm_menu})}, {
  id: 'overflow'
})

bot.global.direct({
  contains: ['image element']
}, (b) => { console.log(b); sendToRoom({"roomName":b.user.room.id,msg:'Block element image',blocks:rmsg.block_img_bttn})}, {
  id: 'image'
})

bot.global.direct({
  contains: ['button element']
}, (b) => { console.log(b); sendToRoom({"roomName":b.user.room.id,msg:'Block element buttons',blocks:rmsg.tf_buttn})}, {
  id: 'button'
})

module.exports = {
  sendToRoom: sendToRoom
}