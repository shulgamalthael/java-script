function squareArray(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    let array = [];
    for ( let i = 0; i < array.length; i++) {
        array.push(array[i] * array[i]);
    }
    return array;
}