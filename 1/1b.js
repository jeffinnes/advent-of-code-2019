const fs = require('fs');
const path = require('path');
const modules = fs.readFileSync(path.join(__dirname, 'module_mass_list.txt')).toString().split('\n');

let totalFuel = 0;

modules.forEach(moduleMass => {
  moduleFuelMass = calcFuelNeeded(moduleMass);
  totalFuel = totalFuel + moduleFuelMass;
  additionalFuelMass = calcFuelNeeded(moduleFuelMass);

  while ((Math.floor(additionalFuelMass / 3) - 2) > 0) {
    totalFuel = totalFuel + additionalFuelMass;
    additionalFuelMass = calcFuelNeeded(additionalFuelMass);
  }

  totalFuel = totalFuel + additionalFuelMass;
  
});

console.log(`Total Fuel: ${totalFuel}`);

function calcFuelNeeded(inputMass) {
  return (Math.floor(inputMass / 3) - 2);
}