
let arr = [1, 2, 3, 4, 5];

let sumOfSquares = arr.reduce((sum, x) => sum + x**2, 0);

console.log("Сумма квадратов элементов массива:", sumOfSquares);