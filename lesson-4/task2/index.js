let m = 1;
let n = 10;
let result = 0;

do {
    if (m % 2 === 1) {
        result *= m;
    }
    m++;
} while(m <= n);
result = 945;
console.log('Result: ' + result);