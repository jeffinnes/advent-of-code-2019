const fs = require('fs');
const path = require('path');

let input = fs.readFileSync(path.join(__dirname, 'input.txt')).toString().split(',');
//let input = [1,9,10,3,2,3,11,0,99,30,40,50];
let validInputs = [];

const opCodeLen = 4;
// Set this const equal to whatever value you are looking for
const goalOutput = 19690720;

// Convert array values from string to int
for (const key in input) {
  input[key] = parseInt(input[key], 10);
}

for (let noun = 0; noun <= 99; noun++) {

  for (let verb = 0; verb <= 99; verb++) {
    // Process the intcode by passing a shallow copy of the input array
    let processedIntCode = processIntCode(input.slice(0), noun, verb, opCodeLen);

    if (processedIntCode[0] === goalOutput) {
      validInputs.push(100 * noun + verb);
    }

  }

}

// Out put valid noun/verb codes
console.log(`Valid Noun/Verb codes: ${validInputs}`);



/**
 * Processes the input opcode incrementing the opCodeLength after each instruction. 
 */
function processIntCode(input, noun, verb, opCodeLength) {
  let tempInput = input;
  tempInput[1] = noun;
  tempInput[2] = verb;
  let i = 0;

  while (i <= tempInput.length - 1) {
    const pos_one = tempInput[i + 1];
    const pos_two = tempInput[i + 2];
    const pos_three = tempInput[i + 3];

    switch (tempInput[i]) {
      case 1:
        tempInput[pos_three] = tempInput[pos_one] + tempInput[pos_two];
        break;

      case 2:
        tempInput[pos_three] = tempInput[pos_one] * tempInput[pos_two];
        break;

      case 99:
        return tempInput;
        break;

      default:
        console.log(`Unknown opcode encountered at index ${i}`);
        break;
    }

    i = i + opCodeLength;
  }

  console.log(`No end code (99) encountered in provided input. Returning input in current state`);
  return tempInput;

}
