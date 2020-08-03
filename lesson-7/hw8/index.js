function arrAverage(arr) {
    if (!Array.isArray(arr)) return null;
    return arr.reduce((acc, elem) => (acc + elem)) / arr.length;
}