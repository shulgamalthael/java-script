export function getItemsList() {
    const elementsList = document.querySelectorAll('.technology');
    console.dir(elementsList);
    return elementsList;
};

getItemsList();

export function getItemsArray() {
    const elementsArray = document.querySelectorAll('.tool');
    console.dir(Array.from(elementsArray).map(elem => elem));
    return Array.from(elementsArray).map(elem => elem);
};

getItemsArray();