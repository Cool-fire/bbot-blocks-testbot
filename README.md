[create-user]: https://rocket.chat/docs/bots/creating-bot-users/
[configure-bot]: https://rocket.chat/docs/bots/configure-bot-environment/

![bRocket | A bBot boilerplate for Rocket.Chat bots](https://github.com/Amazebot/bbot-rocketchat-boilerplate/raw/master/img/banner.png)
## Bot to test blocks support in Rocket chat android client
1. create a new bot with name bot and password pass
2. Add the glitch url where bot is running ex: https://glitchurl.com/webhookurl in webHookUrl custom field of bot

## Test the blocks

1. Run `@bot start flow` to test the send response object and continous flow
2. Run `@bot image element` to test the block image element
3. Run `@bot overflow element` to test the block overflow element
4. Run `@bot datepicker element` to test the block datepicker element
5. Run `@bot button element` to test the block button element

Demo : [Demo](https://www.youtube.com/watch?v=Q8g1Wq2m8cc)

# How to run the bot?

+ Logon to [rocket chat server](https://bots.rocket.chat) and create an account for the bot. (You will need admin rights)
+ Assign the role `bot` while creating the bot account above. 
+ Clone this repository.
+ Run `npm install`.
+ Create a `.env` file according to the template below, replacing the credentials with the account created:
```
BOT_FRAMEWORK=bbot
ROCKETCHAT_URL=
ROCKETCHAT_ROOM=general,richmessages
ROCKETCHAT_USE_SSL=true
ROCKETCHAT_USER=
ROCKETCHAT_PASSWORD=
RESPOND_TO_DM=true
RESPOND_TO_EDITED=false
```
+ Run `npm start` 
  


