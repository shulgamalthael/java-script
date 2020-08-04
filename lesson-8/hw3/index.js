function getKeys(obj) {
    let arrKeys = Object.key(obj);
    return arrkey.forEach(key => console.log(key));
}

const user = {
    name: 'Alex',
    age: 30,
    married: true,
    children: 'two girls',
}
getKeys(user);