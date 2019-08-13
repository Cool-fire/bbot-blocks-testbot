// interactive buttons showcasing the full, compact, tall webview ratios
const attach = [
  {
    "title": "interactive buttons",
    "button_alignment": "horizontal",
    "text": "These are the some social networking sites",
    "actions": [
      {
        "type": "button",
        "text": "Google",
        "url": "https://google.com",
        "is_webview": true,
        "webview_height_ratio": "tall"
      },
      {
        "type": "button",
        "text": "Facebook",
        "url": "https://fb.com",
        "is_webview": true,
        "webview_height_ratio": "full"
      },
      {
        "type": "button",
        "text": "twitter",
        "url": "https://twitter.com",
        "is_webview": true,
        "webview_height_ratio": "compact"
      }
    ]
  }
]


//blocks showcasing image elements and button element
const block_img_buttn = [
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "Hello, **bot** wants to know where you'd like to go for the Viasat Company members to dinner.\n\n **Please select a restaurant:**"
		}
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "**Farmhouse Thai Cuisine**\nThey do have some vegan options, like the roti and curry, plus they have a ton of salad stuff and noodles can be ordered without meat!! They have something for everyone here"
		},
		"accessory": {
			"type": "image",
			"image_url": "https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80",
			"alt_text": "alt text for image"
		}
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "**Kin Khao**\nThe sticky rice also goes wonderfully with the caramelized pork belly, which is absolutely melt-in-your-mouth and so soft."
		},
		"accessory": {
			"type": "image",
			"image_url": "https://images.unsplash.com/photo-1523699289804-55347c09047d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
			"alt_text": "alt text for image"
		}
	},
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "**Ler Ros**\nI would really recommend the  Yum Koh Moo Yang - Spicy lime dressing and roasted quick marinated pork shoulder, basil leaves, chili & rice powder."
		},
		"accessory": {
			"type": "image",
			"image_url": "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80",
			"alt_text": "alt text for image"
		}
	},
	{
		"type": "actions",
		"elements": [
			{
				"type": "button",
        "action_id":"farm",
				"text": {
					"type": "plain_text",
					"text": "Farmhouse",
					"emoji": true
				},
				"value": "farmhouse"
			},
			{
				"type": "button",
        "action_id":"kinkhao",
				"text": {
					"type": "plain_text",
					"text": "Kin Khao",
					"emoji": true
				},
				"value": "kinkhao"
			},
			{
				"type": "button",
        "action_id":"lerros",
				"text": {
					"type": "plain_text",
					"text": "Ler Ros",
					"emoji": true
				},
				"value": "lerros"
			}
		]
	}
]

//blocks showcasing datepicker element
const block_meeting_date = [
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "Pick a date for the dinner with viasat team"
		},
		"accessory": {
			"type": "datepicker",
			"initial_date": "2019-08-03",
      "action_id":"meeting_date",
			"placeholder": {
				"type": "plain_text",
				"text": "Select a date",
				"emoji": true
			}
		}
	}
]

//block showcasing button element
const block_tf_bttn = [
	{
		"type": "actions",
		"elements": [
			{
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "Yes",
					"emoji": true
				},
				"value": "Yes",
                  "style": "primary",
                "action_id":"t_bttn"
			},
			{
				"type": "button",
				"text": {
					"type": "plain_text",
					"text": "No",
					"emoji": true
				},
				"value": "No",
                  "style": "danger",
                "action_id":"f_bttn"
			}
		]
	}
]

//block showcasing overflow element
const block_farm_menu = [
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "Nice choice 😄 I have heard that they have great ambience. Now let's check out their menu"
		},
		"accessory": {
			"type": "overflow",
      "action_id":"farmhouse_menu",
			"options": [
				{
					"text": {
						"type": "plain_text",
						"text": "Naan Bread 🍲",
						"emoji": true
					},
					"value": "naan"
				},
				{
					"text": {
						"type": "plain_text",
						"text": "Roti and curry 🍝",
						"emoji": true
					},
					"value": "roti"
				},
				{
					"text": {
						"type": "plain_text",
						"text": "Salad 🥗 ",
						"emoji": true
					},
					"value": "salad"
				},
				{
					"text": {
						"type": "plain_text",
						"text": "Noodles 🍜",
						"emoji": true
					},
					"value": "noodles"
				}
			]
		}
	}
]

//block showcasing button with style primary and danger
const block_noodles = [
	{
		"type": "section",
		"text": {
			"type": "mrkdwn",
			"text": "**Noodels**\n⭐⭐⭐⭐2082 reviews\n I would really recommend the  Yum Koh Moo Yang - Spicy lime dressing and roasted quick marinated pork shoulder, basil leaves, chili & rice powder noodles."
		},
		"accessory": {
			"type": "image",
			"image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/DawwNigKJ2ckPeDeDM7jAg/o.jpg",
			"alt_text": "alt text for image"
		}
	},
	{
		"type": "actions",
		"elements": [
			{
				"type": "button",
        "action_id": "y_noodles",
				"text": {
					"type": "plain_text",
					"text": "Accept",
					"emoji": true
				},
				"value": "y_noodels",
				"style": "primary",
			},
			{
				"type": "button",	
        "action_id": "n_noodles",
				"text": {
					"type": "plain_text",
					"text": "No",
					"emoji": true
				},
				"value": "n_noodels",
				"style": "danger"
			}
		]
	}
]

//block showcasing button image element
const block_final = [
  {
		"type": "section",
		"text": {
			"type": "mrkdwn",
      "text": "Your order for noodles is saved and viasat team is going to have dinner at FarmHouse restraunt\n\n\n 📍 215 Beechwood Avenue | Earlsdon, Coventry CV5 6HB, Boston"
		},
		"accessory": {
			"type": "image",
			"image_url": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
			"alt_text": "alt text for image"
		}
	},
]

module.exports.button_attach = attach
module.exports.block_img_bttn = block_img_buttn
module.exports.block_date = block_meeting_date
module.exports.block_tf_bttn = block_tf_bttn
module.exports.block_farm_menu = block_farm_menu
module.exports.block_noodles = block_noodles
module.exports.block_final = block_final