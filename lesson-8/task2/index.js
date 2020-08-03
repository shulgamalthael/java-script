const concatProps = obj => {
    const arr = [];

    for (let key in obj) {
        arr.push(obj[key]);
        // arr = arr.concat(obj[key]);
    }

    return arr;
}