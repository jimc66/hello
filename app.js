var msg = 'Hello World';
var msg3 = "";
console.log(msg);
const request = require('request');
const options = {  
    url: 'https://www.reddit.com/r/funny.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'
    }
};
msg='just set request headers'
console.log(msg);
request.get(options, function(err, res, body) {  
    let json = JSON.parse(body);
    console.log(json);
});
msg='just returned from reddit call'
console.log(msg);

const request2 = require("request");

const url = "https://jsonplaceholder.typicode.com/posts/1";

request2.get(url, (error, response, body) => {
  let json = JSON.parse(body);
  console.log(body);
});
msg= 'just returned from json placeholder site - log above';
console.log(msg);
msg3=request2.body;
console.log (msg3);
const request3 = require("request");

const url2 = "https://www.reddit.com/r/funny.json";

request3.get(url2, (error, response, body2) => {
  let json = JSON.parse(body2);
//  console.log(body2);
});

msg3= 'just returned from redone reddit call - output above';
console.log(msg3);
console.log(msg3);
console.log(msg3);
console.log(msg3);

