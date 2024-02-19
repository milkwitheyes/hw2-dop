const numbers = [100, 55, 15, 300, 20];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    console.log(`${sum} + ${numbers[i]} = ${sum + numbers[i]}`);
    sum += numbers[i];
}

console.log(`Итоговая сумма: ${sum}`);

const numbers1 = [100, 55, 15, 300, 20];
let sum1 = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log('Сумма значений массива:', sum);