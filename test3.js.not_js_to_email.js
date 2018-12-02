var request = require("request");
var SeasonStats;

// Initialize creates a promise to Promise which waits for the json download
function initialize() {
    // Setting URL and headers for request
    var options = {
        url: 'https://api.fantasy.nfl.com/v1/players/stats?statType=seasonStats&season=2018&week=12&format=json',
        headers: {
            'User-Agent': 'request'
        }
    };
    // Return new promise - to parse the NFL stats
    return new Promise(function(resolve, reject) {
    	// Do async job
        request.get(options, function(err, resp, body) {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(body));
            }
        })
    })

}

// our version of "main"
function main() {
    var initializePromise = initialize();
    // the promise from initialize
    initializePromise.then(function(result) {
        SeasonStats = result;
        console.log(" ===== Retrieved season stats - here comes the list ==== ");
        console.log ("total # of elements");
        var num_players = SeasonStats.players.length;
        console.log (num_players);
        
        for (var i = 0; i<num_players;i++) {
            console.log(SeasonStats.players[i].name)
        }

        // this didn't work - so I just iterated the loop above
        //  const matcher = "Brady";
        //  let matches = SeasonStats.players.filter (self => self.includes(matcher));
        //  console.log (matches);

        // done messing with the player stats
        console.log(" =====  exiting Promise for API results  ===== ")
    }, function(err) {
        console.log(err);
    })
}

main();
console.log ("back from initializing")
