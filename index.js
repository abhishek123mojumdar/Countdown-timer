// Import stylesheets
import './style.css';

// Write Javascript code!

let button = document.getElementById('startTimer');
let buttonReset = document.getElementById('resetAndStart');
let h4 = document.getElementById('showTime');
let initTime = 20;
let interVal;

button.addEventListener('click', startTimer);

function startTimer() {
  interVal = setInterval(() => {
    button.style.display = 'none';
    buttonReset.style.display = 'none';
    h4.style.color = 'black';
    initTime = initTime - 1;
    h4.innerHTML = initTime;
    if (initTime <= 10 && initTime > 5) {
      h4.style.color = 'green';
    } else if (initTime <= 5 && initTime > 0) {
      h4.style.color = 'red';
    } else if (initTime === 0) {
      console.log('here');
      clearInterval(interVal);
      initTime = 20;
      buttonReset.style.display = 'inline';
    }
  }, 1000);
}

buttonReset.addEventListener('click', startTimer);
