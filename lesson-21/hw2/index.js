const getItemsList = () => {
    const itemList =  document.querySelectorAll('technology');
    return itemList;
    console.dir(itemList);
};

getItemsList();

const getItemsArray = () => {
    const itemsArray = document.querySelectorAll('tool');
    return Array.from(elementsArray).map(elem => elem);
    console.dir(Array.from(elementsArray).map(elem => elem));
};

getItemsArray();