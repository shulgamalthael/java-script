let m = 15;
let n = 25;
let result = 0;

do {
    if (m % 2 === 1) {
        result *= m;
    }
    m++;
} while(m <= n);

console.log('Result: ' + result);