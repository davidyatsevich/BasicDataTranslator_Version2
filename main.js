//========================================
// Number Base Converter (Node.js Version)
//========================================

const readline = require('readline');

//========================================
// Global Variables
let currentUserInput = '';
let currentSelectedUserInput = '';

//========================================
// Constants
const MAX_BINARY_LENGTH = 64;
const MAX_INPUT_LENGTH = 100;

//========================================
// Readline Interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//========================================
// Validators
function isValidBinary(str) {
  if (!str || str.length > MAX_BINARY_LENGTH) return false;
  return /^[01]+$/.test(str);
}

function isValidDecimal(str) {
  if (!str || str.length > 20) return false;
  if (str.length > 1 && str[0] === '0') return false;
  return /^[0-9]+$/.test(str);
}

function isValidHexadecimal(str) {
  if (!str || str.length > 16) return false;
  return /^[0-9a-fA-F]+$/.test(str);
}

//========================================
// Input Functions
function inputBinary(callback) {
  rl.question(`Input Binary (max ${MAX_BINARY_LENGTH} digits): `, input => {
    if (input.length > MAX_INPUT_LENGTH) {
      console.log(`Input too long! Maximum ${MAX_INPUT_LENGTH} characters allowed.`);
      return inputBinary(callback);
    }
    if (!isValidBinary(input)) {
      console.log('Invalid binary input! Please enter only 0s and 1s.');
      return inputBinary(callback);
    }
    currentUserInput = input;
    currentSelectedUserInput = '[Base 2] | Binary';
    callback();
  });
}

function inputDecimal(callback) {
  rl.question(`Input Decimal (max 20 digits): `, input => {
    if (input.length > MAX_INPUT_LENGTH) {
      console.log(`Input too long! Maximum ${MAX_INPUT_LENGTH} characters allowed.`);
      return inputDecimal(callback);
    }
    if (!isValidDecimal(input)) {
      console.log('Invalid decimal input! Please enter only digits 0-9.');
      return inputDecimal(callback);
    }
    currentUserInput = input;
    currentSelectedUserInput = '[Base 10] | Decimal';
    callback();
  });
}

function inputHexadecimal(callback) {
  rl.question(`Input Hexadecimal (max 16 digits): `, input => {
    if (input.length > MAX_INPUT_LENGTH) {
      console.log(`Input too long! Maximum ${MAX_INPUT_LENGTH} characters allowed.`);
      return inputHexadecimal(callback);
    }
    if (!isValidHexadecimal(input)) {
      console.log('Invalid hexadecimal input! Please enter only 0-9 and A-F.');
      return inputHexadecimal(callback);
    }
    currentUserInput = input.toUpperCase();
    currentSelectedUserInput = '[Base 16] | Hexadecimal';
    callback();
  });
}

//========================================
// Conversion Functions
function convertToBinary() {
  if (currentSelectedUserInput === '[Base 10] | Decimal') {
    const num = BigInt(currentUserInput);
    console.log(`Binary result: ${num.toString(2)}`);
  } else if (currentSelectedUserInput === '[Base 16] | Hexadecimal') {
    const num = BigInt('0x' + currentUserInput);
    console.log(`Binary result: ${num.toString(2)}`);
  } else {
    console.log('Already in Binary!');
  }
}

function convertToDecimal() {
  if (currentSelectedUserInput === '[Base 2] | Binary') {
    const num = BigInt('0b' + currentUserInput);
    console.log(`Decimal result: ${num.toString(10)}`);
  } else if (currentSelectedUserInput === '[Base 16] | Hexadecimal') {
    const num = BigInt('0x' + currentUserInput);
    console.log(`Decimal result: ${num.toString(10)}`);
  } else {
    console.log('Already in Decimal!');
  }
}

function convertToHexadecimal() {
  if (currentSelectedUserInput === '[Base 2] | Binary') {
    const num = BigInt('0b' + currentUserInput);
    console.log(`Hexadecimal result: ${num.toString(16).toUpperCase()}`);
  } else if (currentSelectedUserInput === '[Base 10] | Decimal') {
    const num = BigInt(currentUserInput);
    console.log(`Hexadecimal result: ${num.toString(16).toUpperCase()}`);
  } else {
    console.log('Already in Hexadecimal!');
  }
}

//========================================
// Translation Selector
function selectTranslation() 
{
  console.log(`Current Data used => ${currentSelectedUserInput}`);
  console.log('Choose translation protocol:');

  if (currentSelectedUserInput === '[Base 2] | Binary') 
    {
        console.log('a. Decimal');
        console.log('b. Hexadecimal');
    }    
    else if (currentSelectedUserInput === '[Base 10] | Decimal') 
    {
        console.log('a. Binary');
        console.log('b. Hexadecimal');
    } 
    else if (currentSelectedUserInput === '[Base 16] | Hexadecimal') 
    {
        console.log('a. Binary');
        console.log('b. Decimal');
    }

  rl.question('>>> ', choice => {
    choice = choice.toLowerCase();
    switch (currentSelectedUserInput) 
    {
      case '[Base 2] | Binary':
        if (choice === 'a') convertToDecimal();
        else if (choice === 'b') convertToHexadecimal();
        else console.log('Invalid choice!');
        break;
      case '[Base 10] | Decimal':
        if (choice === 'a') convertToBinary();
        else if (choice === 'b') convertToHexadecimal();
        else console.log('Invalid choice!');
        break;
      case '[Base 16] | Hexadecimal':
        if (choice === 'a') convertToBinary();
        else if (choice === 'b') convertToDecimal();
        else console.log('Invalid choice!');
        break;
    }
    rl.close();
  });
}

//========================================
// Main Menu
console.log('==================================');
console.log('Welcome to Number Base Converter');
console.log('==================================');
console.log('Please choose user input:');
console.log('1. Binary (e.g. 101011101)');
console.log('2. Decimal (e.g. 12345678)');
console.log('3. Hexadecimal (e.g. 123AFCB)');
rl.question('>>> ', selection => {
  switch (selection) 
  {
    case '1':
      inputBinary(selectTranslation);
      break;
    case '2':
      inputDecimal(selectTranslation);
      break;
    case '3':
      inputHexadecimal(selectTranslation);
      break;
    default:
      console.log('Invalid selection! Please choose 1, 2, or 3.');
      rl.close();
      break;
  }
});
