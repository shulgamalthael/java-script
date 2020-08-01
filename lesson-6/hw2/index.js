  
function createEmptyArray(len) {

    let arr = emptyArray();
    let arr = [];

    for ( let i = 0; i < arr.length; i++) {
        arr.unshift(len);
    }
    return arr;
}