//* 1 Необходимо с помощью цикла for вывести следующие 11 строк в консоль:

const definitions = ['0 – это ноль', '1 – нечетное число', '2 – четное число', '3 – нечетное число', '4 – четное число', '5 – нечетное число',  '6 – четное число','7 – нечетное число', '8 – четное число', '9 – нечетное число', '10 – четное число'] ;
for (let i = 0; i < definitions.length; i++) {
console.log(definitions[i]);
}


let numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.splice(2,2);
console.log(numbers); 

// * 3 Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// Рассчитать сумму элементов этого массива
// Найти минимальное число
//  Найти есть ли в этом массиве число 3

const min = 0;
const max = 9;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum);


const generateArray = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
  );

let arr = generateArray(5, 9);
console.log(arr);
let res = arr.reduce(function(sum, elem) {
	return sum + elem;
}, 0);

console.log(res);

const minValue = Math.min.apply(null, arr);
console.log(minValue); 


const isThreeinArr = arr.includes(3);
console.log(isThreeinArr); //