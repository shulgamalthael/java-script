function squareArray(array) {
    if (!Array.isArray(array)) {
        return null;
    }

    ret= [];            

    for (var i = 0, len = arr.length; i < len; i++) {
        root = Math.sqrt(arr[i]);
        ret.push(root);
    }

    return ret; 
}