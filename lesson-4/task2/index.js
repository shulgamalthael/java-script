let m = 1;
let n = 10;
let result = 0;

do {
    if (m % 2 === 0) {
        result *= m;
    }
    m++;
} while(m <= n);

console.log('Result: ' + result);