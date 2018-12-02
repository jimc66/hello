let data = [
    {
      country: 'China',
      population: 1409517397,
    },
    {
      country: 'India',
      population: 1339180127,
    },
    {
      country: 'USA',
      population: 324459463,
    },
    {
      country: 'Indonesia',
      population: 263991379,
    }
  ]
  let cities = data.filter(val => {
    return val.population > 500000000;
  });


  //same
//let cities = data.filter(val => val.population > 500000000);


//let matches = SeasonStats.players.filter (self => self.includes(matcher));