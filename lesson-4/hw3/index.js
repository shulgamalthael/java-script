let sum = 0;
let summ;
for ( let i = 0; i <= 1000; i++) {
    if ( i % 2 === 1) {
        console.log('Found');
        summ = sum + i;
    }
}
if ( summ * 5 > 5000){
    console.log('Bigger');
}
else {
    console.log('Smaller or equal');
}