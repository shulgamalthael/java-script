let m = 1;
let n = 50;
let result = 0;

do {
    if (m % 2 === 0 && m % 4 === 1){
        result += m;
    }
    if (m % 3 === 0){
        result -= m;
    }
    if (m % 4 === 0){
        result *= m;
    }
    if (m % 5 === 0){
        console.log(m); 
    }
    m++
}while(m <= n);