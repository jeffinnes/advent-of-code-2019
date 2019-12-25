const fs = require('fs');
const path = require('path');

let input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().split('\n');

let info = {
  wires : {
    wireOne: input[0].split(','),
    wireTwo: input[1].split(',')
  },
}

console.log(info);


// ToDo: Find the intersections


// ToDo: calculate Manhattan distance to each intersection

// ToDo: Output Shortest distance