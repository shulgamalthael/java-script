function setButton(button) {
    const button = document.querySelector('body');
    setText.innerHTML = `<button>${buttonText}</button>`;
}

setButton('buttonText');

export { setButton };