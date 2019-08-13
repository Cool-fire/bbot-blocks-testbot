const express = require('express')
const rmsg = require('./richmessage')
const { driver, api } = require('@rocket.chat/sdk')

// const { sendToRoom } = require('./richmessages')



const app = express()
const port = 5000
app.use(express.urlencoded());
app.use(express.json());

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/', (req, res) => res.send('Hello World!'))

const sendToRoom = async ({roomName = 'GENERAL', msg = 'Test for blocks' , attachments, blocks}) => {
 await driver.sendMessage({"rid":roomName, msg, attachments, blocks}) 
}

let date
function parseBody(body) {
  const user = body.user;
  const room = body.room._id;
  const originalMessage = body.originalMessage;
  const actions = body.actions;
  if(body.type == 'block_actions'){
    const action = actions[0];
            console.log(action);

    if(action.type == 'button') {
      let actionId = action.actionId;
      console.log(actionId);
      if(actionId == 't_bttn') {
        sendToRoom({roomName:room,msg:"Blocks showcasing image element and buttons", blocks:rmsg.block_img_bttn})
      } else if(actionId == 'f_bttn') {
        sendToRoom({roomName:room,msg:"@"+user.username+" So sad 😟 that you didn't want to go for a restraunt. let's party 🎉 instead at home"})
      } else if(actionId == 'farm') {
        sendToRoom({roomName:room,msg:"Block showcasing the overflow Menu's", blocks: rmsg.block_farm_menu})
      } else if(actionId == 'y_noodles') {
        console.log("entered");
        sendToRoom({roomName:room,msg:"Block showcasing image element", blocks: rmsg.block_final})
      } 
      
    } 
    if(action.type == 'datepicker') {
      if(action.actionId == 'meeting_date') {
        date = action.selected_date;
        sendToRoom({roomName:room,msg:"@"+user.username + ' has selected '+ date + " for dinner"})
        sendToRoom({roomName:room,msg:"@"+user.username+" shall we continue with choosing Restaurant",blocks:rmsg.block_tf_bttn})
      }
    } 
    if(action.type=='overflow') {
      if(action.actionId == 'farmhouse_menu'){
        const option = action.selected_option
        if(option.value == "naan") {
        } else if(option.value == "noodles") {
            sendToRoom({roomName:room,msg:"@"+user.username + " good choice selecting noodles", blocks:rmsg.block_noodles})
        } else if(option.value == "salad") {
          
        } else if(option.value == "roti") {
          
        }
      }
    }
 }
}

app.post('/webhookurl', function(req, res){
  let body = req.body;
  res.status(200).end();

  console.log(body);
  parseBody(body)
})

module.exports = { app }