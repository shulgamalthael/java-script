function includes (arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return false;
        }
    }
    return true;
}
function removeDuplicates(arr) {
    const unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (includes(unique, arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}