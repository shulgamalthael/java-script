function getSum(a,b) {
    let sum = 0;
    for (let i = a; a <= b; i++) {
        if( a % 2 === 0) {
            sum += a;
        }
    }
    return sum;
}