const fs = require('fs');
const path = require('path');
const modules = fs.readFileSync(path.join(__dirname, 'module_mass_list.txt')).toString().split('\n');

let fuel = 0;

modules.forEach(moduleMass => {
  fuel = fuel + (Math.floor(moduleMass / 3) - 2);
});

console.log(`Total Fuel: ${fuel}`);
