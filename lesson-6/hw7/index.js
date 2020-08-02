function cloneArr(arr) {
    if(!Array.isArray(arr)) return null;

    let cloneArr = []
    for (let i = 0; i < arr.length - 1; i++) {
        cloneArr.push(arr[i]);
    }
    return cloneArr;
}