function checkSum(arr) {
    if(!Array.isArray(arr)) return null;

    sum = 0;
    let checkSum = [];
    for (let i = 0; i < checkSum.length; i++) {
        sum = sum += checkSum[i];
    }

    if (sum > 100) {
        return true;
    } else {
        return false;
    }

}