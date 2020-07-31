function getSum(a,b) {
    let sum = 0;
    for (let a = 0; a <= b; a++) {
        if( a % 2 === 0) {
            sum += a;
        }
    }
    return sum;
}

getSum(1,10);