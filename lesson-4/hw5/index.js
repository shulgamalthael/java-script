const n = 1000;
let sum = 0;

for( let i = 1; i <= 1000; i++) {
    sum += i;
}

let summ = sum % 1234;
let summm = Math.floor(sum / 1234);

sum > summ ? console.log(true) : console.log(false);