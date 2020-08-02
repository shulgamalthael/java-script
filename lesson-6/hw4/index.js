function checkSum(arr) {
    if(!Array.isArray(arr)) return null;

    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum += arr[i];
    }

    return (sum > 100);

}