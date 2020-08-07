const obj1 = {
    name: 'Denis'
}
const obj2 = {
    name: 'Denis'
}
console.log(obj1 == obj2);
console.log(obj1 === obj2);
const var1 = () => { };
const var2 = () => { };
console.log(var1 === var2);
const str1 = 'HELLO';
const str2 = 'HELLO';
console.log(str1 === str2);

//solution

function compareObject(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    console.log(keys1);
    console.log(keys2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    console.log('STEP 2');

    keys1.forEach(key => {
        console.log('KEY1' + key);
        console.log('VALUE' + obj[key]);

        console.log('KEY1' + key2[index]);
        console.log('VALUE' + obj2[keys2[index]]);

        if(obj1[key] !== obj2[keys2[index]]) {
            return false;
        }
    });
}

const obj1 = {
    name: 'Denis',
    age: 28,
    city: "Kira"
}

const obj2 = {
    name: 'Denis',
    age: 1
}

console.log(obj1, obj2);