function getSum(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    let sum = 0;
    const arraySum = array();
    for (let i = 0; i <= array.length; i ++) {
        sum += array[i];
    }
    return sum;
}