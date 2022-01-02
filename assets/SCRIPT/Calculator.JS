const Themestoogle = document.querySelector('#theme-toogle');
const body = document.querySelector('body');
const ballToogle = document.querySelector('#circle');
const screen = document.querySelector('#screenResult');
let theme = 1;

getAndShowKeys = (button) => {
    const inputKeys = document.querySelector('#screenResult').innerHTML += button.value;
};

clearInput = (button) => {
    document.querySelector('#screenResult').innerHTML = "0";
};

deletButtons = (button) => {
    const inputResult = document.querySelector('#screenResult').innerHTML;
    document.querySelector('#screenResult').innerHTML = inputResult.substring(0, inputResult.length -1);
};

operationsResult = (button) => {
    const result = document.querySelector('#screenResult').innerHTML;
    document.querySelector('#screenResult').innerHTML = eval(result);
};

Themestoogle.addEventListener('click', ()=>{
    theme++;
    switch(theme) {
        case 2:

        case 3:

        case 4:
    }
});