  
function createEmptyArray(len) {

    let emptyArray = [];
    emptyArray[emptyArray.length] = len;

    for (let i = 0; i < len; i++) {
        emptyArray[i] = "";
    }

    return emptyArray;
}