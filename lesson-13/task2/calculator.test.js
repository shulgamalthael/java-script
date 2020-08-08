import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';

it('should squared numbers', () => {
    const result = getSquaredArray([1, 2, 3]);
    expect(result).toEqual([1, 4, 9]);
});

it('should keep odd numbers only', () => {
    const result = getOddNumbers([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 3, 5]);
});

it('should get sum numbers', () => {
    const result = getSum(1, 2);
    expect(result).toEqual(3);
});