// Calculator constants
const display = document.querySelector('#screenResult');
const resetBtn = document.querySelector('.reset-button');
const dotBtn = document.querySelector('.dot-button');
const delBtn = document.querySelector('.del-button');
const equalBtn = document.querySelector('.equal-button');

// Theme changer constants
const Themestoogle = document.querySelector('#theme-toogle');
const body = document.querySelector('body');
const ballToogle = document.querySelector('#circle');
let theme = 1;

const operathors = ["+", "-", "*", "/"];

// Shows the numbers at screen
for (let elm of document.querySelectorAll(".num")) {
    elm.addEventListener("click", (button) => {
      display.value += button.target.value;
    });
};

// Show the operathors at screen
for (let elm of document.querySelectorAll(".opr")) {
    elm.addEventListener("click", (button) => {
      if (display.value === "") return;
      if (operathors.includes(display.value[display.value.length - 1])) return;
      display.value += button.target.value;
    });
};

// Event clicks for dot class
dotBtn.addEventListener("click", (button) => {
    if (display.value == "") {
      display.value = "0.";
      return;
    };

    if (operathors.includes(display.value[display.value.length - 1])) {
      display.value += "0.";
      return;
    };
    
    if (display.value == ".") return;
    display.value += button.target.value;
});

delBtn.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

resetBtn.addEventListener("click", () => {
    display.value = "";
});

equalBtn.addEventListener("click", () => {
    display.value = eval(display.value);
});

Themestoogle.addEventListener('click', ()=>{
    theme++;
    switch(theme) {
        case 2:

        case 3:

        case 4:
    }
});