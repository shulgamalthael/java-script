let n = 1;
let sum = 1;

do {
    n++;
    sum += String(n);
} while(n < 50);

console.log('Result ' + sum);