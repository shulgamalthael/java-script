const sortDesc = numbers => {
    numbers.sort((a, b) => a - b);

    return numbers;
};

const arr = [2, 4, 30, 1, 5, 21, 18];

console.log(sortDesc(arr));