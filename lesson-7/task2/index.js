const sortDesc = numbers => {
    function compare(a, b) {
        if ( a < b ) {
            return 1;
        }
        return -1;
    }
    numbers.sort(compare);

    return numbers;
};

const arr = [2, 4, 30, 1, 5, 21, 18];

console.log(sortDesc(arr));