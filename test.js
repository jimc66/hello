var info2="";
var info3 = "";
const request = require('request');

var options = {
url:'https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&week=12&format=json'
};

request.get(options, function(err, res, body) { 
let json = newFunction(body);
    newFunction_1(json);
info3 = json;
});
info2 = "test";
console.log(info2);
console.log(info3);

function newFunction_1(json) {
    console.log(json);
};

function newFunction() { 
    let json = newFunction(body);
    info3 = json;
};


function getJson(myid, req, res) {
    var headers, options;
  
    // Set the headers
//    headers = {
//      'User-Agent':       'Super Agent/0.0.1',
//      'Content-Type':     'application/x-www-form-urlencoded'
//    }
  
    // Configure the request
    options = {
        url:'https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&week=12&format=json'
//        method: 'GET',
//        headers: headers,
//        qs: {'id': myid}  
    }
  
    // Start the request
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body);
      } else {
        console.log(error);
      }
    });
  }

router.get('/:id', function(req, res) {
    getJson(req.params.id, req, res);
});