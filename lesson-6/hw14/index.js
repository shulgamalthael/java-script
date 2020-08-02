function uniqueCount(arr) {
    if(!Array.isArray(arr)) return null;
    const uniqueSet = [...new Set(array)];
    return uniqueSet.length;
}