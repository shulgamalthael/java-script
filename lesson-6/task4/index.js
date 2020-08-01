function swap(array) {
    let [firstelement, ...rest] = arr;
    return [...rest, firstelement];
}