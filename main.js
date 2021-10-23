// Display Function

function display(value) {
  document.getElementById('textVal').value += value;
}

// Evaluation Fucntion

function evalFunction() {
  let x = document.getElementById('textVal').value;
  let y = eval(x);

  document.getElementById('textVal').value = y;
}

// Clear Function

function clr() {
  document.getElementById('textVal').value = '';
}

// Delete Character Function for backSpace

function delChar() {
  let x = document.getElementById('textVal').value;
  let y = x.split('');
  y.splice(y.length - 1, 1);

  document.getElementById('textVal').value = y.join('');
}

// Keyboard Events

let checkKeyPress = (input) => {
  switch (input.key) {
    case 'c':
      clr();
      break;

    case 'Backspace':
      delChar();
      break;

    case '0':
      display('0');
      break;

    case '1':
      display('1');
      break;

    case '2':
      display('2');
      break;

    case '3':
      display('3');
      break;

    case '4':
      display('4');
      break;

    case '5':
      display('5');
      break;

    case '6':
      display('6');
      break;

    case '7':
      display('7');
      break;

    case '8':
      display('8');
      break;

    case '9':
      display('9');
      break;

    case '+':
      display('+');
      break;

    case '-':
      display('-');
      break;

    case '*':
      display('*');
      break;

    case '/':
      display('/');
      break;

    case '=':
      evalFunction();
      break;
  }
};
window.addEventListener('keydown', checkKeyPress);

// click Events

// Get all inputs and make an array of the node list

let inputs = document.querySelectorAll('input');
let inputsArr = Array.from(inputs);

// give functionality to the equals sign

let equSign = inputsArr.pop();
equSign.addEventListener('click', evalFunction);

// Give functionality to the clear button

document.getElementById('clear').addEventListener('click', clr);

// give display function to all the characters respectively after excluding the clear button and the text input ...... (qual is already popped from when we gave it the evaluation function)

inputsArr.splice(0, 2);
let clickEv = () => {
  let actions = [
    '+',
    '1',
    '2',
    '3',
    '-',
    '4',
    '5',
    '6',
    '*',
    '7',
    '8',
    '9',
    '/',
    '.',
    '0',
  ];

  for (let i = 0; i < inputsArr.length; i++) {
    inputsArr[i].addEventListener('click', () => display(actions[i]));
  }
};
clickEv();
