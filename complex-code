const CONTENT = [
		{
			"text": "Welcome, what can I do for you?"
		},
		{
			"attachment": {
				"payload": {
					"elements": [
						{
							"default_action": {
								"fallback_url": "facebook.com",
								"webview_height_ratio": "tall",
								"messenger_extensions": true,
								"url": "",
								"type": "web_url"
							},
							"buttons": [
								{
									"payload": "1",
									"title": "See Offers",
									"type": "postback"
								}
							],
							"image_url": "https://smartly-image-stage.s3.us-west-2.amazonaws.com/1597418372328.png",
							"subtitle": "",
							"title": "Internet"
						},
						{
							"default_action": {
								"fallback_url": "facebook.com",
								"webview_height_ratio": "tall",
								"messenger_extensions": true,
								"url": "",
								"type": "web_url"
							},
							"buttons": [
								{
									"payload": "1",
									"title": "Latest Offers",
									"type": "postback"
								}
							],
							"image_url": "https://smartly-image-stage.s3.us-west-2.amazonaws.com/1597418376701.png",
							"subtitle": "",
							"title": "Mobile"
						}
					],
					"template_type": "generic"
				},
				"type": "template"
			}
		}
	];

if (new Date().getDay() === 1) {
    CONTENT[1].attachment.payload.elements[1].buttons.push({
       payload: "2",
       title: "Special Monday Discount",
       type: "postback"
    });
}

CONTENT.forEach((el) => {
    messenger_answer.push(el);
});

// //!\\ An API call
// //!\\ Another API call

callback(output);
