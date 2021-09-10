const request = require('request');

request(
  {
    method: 'get',
    uri: 'https://www.google.com',
  },
  (error, response, body) => {
    // success case
    if (!error) {
      // do something
      console.log('hello, I got this from Google:' + body + '.');
    } else {
      // failure case
      console.log('a problem occurs...');
    }
  }
);
