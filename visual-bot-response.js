// This comes from the "rich_text" property.
const menu = [
		{
			"attachment": {
				"payload": {
					"elements": [
						{
							"default_action": {
								"messenger_extensions": false,
								"url": "",
								"type": "web_url"
							},
							"buttons": [
								{
									"payload": "commander une cannibale",
									"title": "Commander",
									"type": "postback"
								}
							],
							"image_url": "https://smartly-image-stage.s3.us-west-2.amazonaws.com/1628173731079.webp",
							"subtitle": "Sauce barbecue, mozzarella, poulet rôti, merguez, boulettes de bœuf assaisonnées",
							"title": "Pizza Cannibale"
						},
						{
							"default_action": {
								"messenger_extensions": false,
								"url": "",
								"type": "web_url"
							},
							"buttons": [
								{
									"payload": "commander une indienne",
									"title": "Commander",
									"type": "postback"
								}
							],
							"image_url": "https://smartly-image-stage.s3.us-west-2.amazonaws.com/1628173824776.webp",
							"subtitle": "Crème fraîche légère française, mozzarella, oignons, poulet rôti, champignons...",
							"title": "Pizza Indienne"
						},
						{
							"default_action": {
								"messenger_extensions": false,
								"url": "",
								"type": "web_url"
							},
							"buttons": [
								{
									"payload": "commander une forestière",
									"title": "Commander",
									"type": "postback"
								}
							],
							"image_url": "https://smartly-image-stage.s3.us-west-2.amazonaws.com/1628173905663.webp",
							"subtitle": "Crème fraîche légère française, mozzarella, lardons fumés, oignons, jambon...",
							"title": "Pizza Forestière"
						}
					],
					"template_type": "generic"
				},
				"type": "template"
			}
		}
	];

if (new Date().getDay() === 1) { // If Monday, special pizza
  menu[0].attachment.payload.elements.push(
    {
							"default_action": {
								"messenger_extensions": false,
								"url": "",
								"type": "web_url"
							},
							"buttons": [
								{
									"payload": "commander une pizza spéciale Lundi",
									"title": "Commander",
									"type": "postback"
								}
							],
							"image_url": "https://smartly-image-stage.s3.us-west-2.amazonaws.com/1628173731079.webp",
							"subtitle": "Sauce top secrète",
							"title": "Pizza Spéciale Lundi"
						}
  );
}

messenger_answer.push(menu[0]);

callback(output);
