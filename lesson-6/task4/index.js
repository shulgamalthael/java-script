function swap(arr) {
    let [firstelement, ...rest] = arr;
    return [...rest, firstelement];
}