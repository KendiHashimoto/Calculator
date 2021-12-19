getAndShowKeys = (button) => {
    document.querySelector('#screenResult').innerHTML += button.value;
}

clearInput = (button) => {
    document.querySelector('#screenResult').innerHTML = "";
}

deletButtons = (button) => {
    document.querySelector('#screenResult').innerHTML -= "";
}
