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
    document.querySelector('#screenResult').innerHTML = inputResult.substring(0, inputResult.length -1); // tentar fazer um if else aqui
};

operationsResult = (button) => {
    const result = document.querySelector('#screenResult').innerHTML;
    document.querySelector('#screenResult').innerHTML = eval(result);
    if (result === 0) {
        document.querySelector('#screenResult').window.alert('Insira valores antes.')
    } 
};

updateScreen = () => {
    if (screen.value === "0") {
        screen.innerText = "0"
    } else {
        screen.innerText = getAndShowKeys();
    }
};

Themestoogle.addEventListener('click', ()=>{
    theme++;
    switch(theme) {
        case 2:

        case 3:

        case 4:
    }
});