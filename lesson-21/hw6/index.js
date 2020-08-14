function createButton(buttonText) {
   const createBtn = document.createElement('button');
    document.querySelector('body').append(createBtn);
    createBtn.innerHTML = buttonText;
};

export { createButton };