let n = 200;
let sum = 0;

do {
    sum += n;
    n -= 1;
} while (n > 100);

console.log('Result ' + sum);