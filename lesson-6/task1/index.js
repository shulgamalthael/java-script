function getArrayBounds(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let scoreArr = [];
    for (let i = 0; i < arr.length; i++) {
        scoreArr.unshift(arr[a]);
    }
    return [arr.length, arr[0], arr[arr.length - 1]];
}