

/*
const keys = document.querySelector('.keys');
keys.addEventListener('click', (event) => {
  // Access the clicked element
  const { target } = event;

  // Check if the clicked element is a button.
  // If not, exit from the function
  if (!target.matches('button')) {
    return;
  }

  if (target.classList.contains('letter')) {
    console.log('letter', target.value);
    return;
  }

  if (target.classList.contains('back')) {
    console.log('back', target.value);
    return;
  }

  if (target.classList.contains('space')) {
    console.log('space', target.value);
    return;
  }

  inputKey(target.value);
  updateDisplay();
});

const target = event.target;


function inputKey(text) {
  const { displayValue } = calculator;
  // Overwrite `displayValue` if the current value is '0' otherwise append to it
  calculator.displayValue = displayValue === 'default' ? text : displayValue + text;
}
*/

