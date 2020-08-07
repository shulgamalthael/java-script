function buildObject(keysList, valuesList) {
    return keysList.reduce((acc, key, index) => {
     return {...acc, [key]: valuesList[index] };
    }, {});
}

const keys = ['name', 'age', 'test', '222'];
const values = ['Denis', '1000', 'uuuuuu', 'ttttt'];

console.log(buildObject(keys, values));