function cloneArr(arr) {
    if (!Array.isArray(arr)) return null;
    let newArr = []
    for (let i = 0; i <= arr.length - 1; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}