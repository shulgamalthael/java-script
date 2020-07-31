function getArrayBounds(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let arr = [];
    for (let i = 0; i < arr.length; i++) {
        arr.unshift(arr[a]);
    }
    return [arr.length, arr[0], arr[arr.length - 1]];
}