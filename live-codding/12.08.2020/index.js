// typical closure example

function makeCounter() {
    let count = 0;


    return function() { // second lex env
        return count++; 
    };
}

// typical closure examle

function makeCounterNew() {
    let count = 0;
    count++;
    return count; // no second lex evn
}