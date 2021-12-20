getAndShowKeys = (button) => {
    const inputKeys = document.querySelector('#screenResult').innerHTML += button.value;
}

clearInput = (button) => {
    document.querySelector('#screenResult').innerHTML = "";
}

deletButtons = (button) => {
    const inputResult = document.querySelector('#screenResult').innerHTML;
    document.querySelector('#screenResult').innerHTML = inputResult.substring(0, inputResult.length -1); // tentar fazer um if else aqui
}

operationsResult = (button) => {
    const result = document.querySelector('#screenResult').innerHTML;
    if (result) {
        document.querySelector('#screenResult').innerHTML = eval(result);
    } else {
        document.querySelector('#screenResult').window.alert('Insira valores antes.')
    }
}
