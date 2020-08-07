const countOccurrences = (str1, str2) => {
    if (str2 === '') return null;

    let count = 0;
    let pos = str1.indexOf(str2)
    while (pos !== -1) {
        count++;
        pos = str1.indexOf(str2, pos + 1);
    }
    return count;
}

const someStr = 'hola cola mola';

const countStr = 'ola';

console.log(countOccurrences(someStr, countStr));