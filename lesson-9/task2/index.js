const user = {
    'Tom': 18,
    'Ann': 18,
};

const copyObj = obj => {
    const coppedObj = Object.assign({}, obj);
    return coppedObj;
}