const fs = require('fs');
const path = require('path');

let input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().split(',');
//let input = [1,9,10,3,2,3,11,0,99,30,40,50];

for (const key in input) {
  input[key] = parseInt(input[key], 10);
}

// Correct for 1202 program alarm
input[1] = 12;
input[2] = 2

processedIntCode = processIntCode(input);

console.log(processedIntCode[0]);

function processIntCode(input) {
  let i = 0;

  while (i <= input.length - 1) {
    const pos_one = input[i + 1];
    const pos_two = input[i + 2];
    const pos_three = input[i + 3];

    switch (input[i]) {
      case 1: 
        input[pos_three] = input[pos_one] + input[pos_two];
        break;

      case 2:
      input[pos_three] = input[pos_one] * input[pos_two];
        break;

      case 99:
        return input;
        break;

      default:
        console.log(`Unknown opcode encountered at index ${i}`);
        break;
    }

    i = i + 4;
  }

  console.log(`No end code (99) encountered in provided input. Returning input in current state`);
  return input;

}
