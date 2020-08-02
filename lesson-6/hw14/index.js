function uniqueCount(array) {
    if (!Array.isArray(array)) return null;
    const uniqueSet = [...new Set(array)];
    return uniqueSet.length;
}