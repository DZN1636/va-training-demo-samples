const request = require('request');

const reqObject = {
  method: 'GET',
  uri: 'https://dog.ceo/api/breeds/image/random',
  json: true
};

const image = {
  "attachment": {
    "type": "image",
    "payload": {
      "url": "something I dont know"
    // 	"url": "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg"
    }
  }
};

request(reqObject, (err, res, body) => {
  if (!err) {
      image.attachment.payload.url = body.message;
      messenger_answer.push(image);
  } else {
      output.answer = 'api problem. Sorryyyyy';
  }
  callback(output);
});
