"use strict"


function  isPrimes(num) {
    for(let i=2; i<num; i++) {
        if(num% 1 === 0) {
            return false;
        }
    }
    return true;
}  



function getPrimes(n) {
    for (let i = 1; i<n; i++) {    
        if (isPrimes(i)) {
            console.log(i);
        }
    }
}

getPrimes(10);