import { getMinSquaredNumbers } from "./getMinSquaredNumbers.js"

it ('should is a empty array', () => {
    const result = getMinSquaredNumbers();
    expect(result).toEqual(null);
});

it ('should is a string', => {
    const result = getMinSquaredNumbers();
    expect(result).toEqual(null);
});

it ('should get min squared numbers', () => {
    const result = getMinSquaredNumbers([-777, -2, 4, 6, 45, -20]);
    expect(result).toEqual(4);
});