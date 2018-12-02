var info2 = "Start test2";
console.log(info2);

const request = require('request');

var options = {
url:'https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&week=12&format=json'
};



request.get(options, function(err, res, body) { 
let json = newFunction(body);
    newFunction_1(json);
info3 = json;
});

var myPromise = new Promise(function(resolve, reject){
    console.log("test)
 })

// Start the request
//    request(options, function (error, response, body) {
//      if (!error && response.statusCode == 200) {
//        res.send(body);
//      } else {
//        console.log(error);
//      }
//    });
//  }
