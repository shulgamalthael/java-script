function checker(arr) {
    if(!Array.isArray(arr)) return null;
        let sum = Math.max.apply(null, arr) + Math.min.apply(null ,arr);
        return (sum > 1000);
}