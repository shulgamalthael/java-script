let sum = 0;
function getSum(a,b) {
    for (let a = 0; a <= b; a++) {
        if( a % 2 === 0) {
            sum += a;
        }
    }
    return sum;
}

getSum(1,10);
console.log(sum);