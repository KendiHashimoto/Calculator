// Calculator constants
const display = document.querySelector('#screenResult');
      resetBtn = document.querySelector('.reset-button');
      numbers = document.querySelectorAll('.num');
      calcs = document.querySelectorAll('.opr');
      dotBtn = document.querySelector('.dot-button');
      delBtn = document.querySelector('.del-button');
      equalBtn = document.querySelector('.equal-button');
      operathors = ["+", "-", "*", "/"];

// Shows the numbers at screen
for (let nums of numbers) {
    nums.addEventListener("click", (button) => {
    display.value += button.target.value;
  });
};

// Show the operathors at screen
for (let opr of calcs) {
    opr.addEventListener("click", (button) => {
      if (display.value === "") return;
      if (operathors.includes(display.value[display.value.length - 1])) return;
      display.value += button.target.value;
    });
};

// Event clicks for dot class
dotBtn.addEventListener("click", (button) => {
  if (display.value === "") {
    display.value = "0.";
    return;
  };

  if (operathors.includes(display.value[display.value.length - 1])) {
    display.value += "0.";
    return;
  };
  
  if (display.value === ".") return; 

  display.value += button.target.value;

});

delBtn.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

resetBtn.addEventListener("click", () => {
    display.value = "";
});

equalBtn.addEventListener("click", () => {
  if (display.value === "") {
    display.value = "";
  } else {
    display.value = eval(display.value);
  };
});

// Theme changer 
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const  three = document.querySelector('#three');
const ballToogle = document.querySelector('#circle')
const body = document.querySelector('body');

one.addEventListener('click', () => {
  body.classList.add('active1');
  display.classList.add('active1');
  body.classList.remove('active2');
  body.classList.remove('active3');
  ballToogle.style.left = '10%';
  display.classList.add('active1');
});

two.addEventListener('click', () => {
  body.classList.add('active2');
  display.classList.add('active2')
  body.classList.remove('active1');
  body.classList.remove('active3');
  ballToogle.style.left = '37%';
  display.classList.add('active2');
});

  three.addEventListener('click', () => {
  body.classList.add('active3');
  display.classList.add('active3')
  body.classList.remove('active1');
  body.classList.remove('active2');
  ballToogle.style.left = '65%';
  display.classList.add('active3');
  });