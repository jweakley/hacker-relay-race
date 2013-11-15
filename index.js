var fs = require('fs');
var file = __dirname + '/hacker.json';

fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.error('Error: ' + err);
    return;
  }

  var data = JSON.parse(data),
    d,
    team;

  // Hack other team's score to be zero
  for(d in data) {
    team = data[d];
    if (d != 12) team.points = 0;
    else team.point += 50;      // sneak in a slight edge
  }

  console.log('Our Team:', data['12']); // Our Team
  console.log('All Teams:', data); // Our Team
});
