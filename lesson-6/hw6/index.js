function reverseArray(arr) {
    if (!Array.isArray(arr)) return null;

    let swapArr = [];
    for (let i = 0; i < arr.length; i++) {
        swapArr.push(arr[arr.length - i]);
    }
    return swapArr;
}