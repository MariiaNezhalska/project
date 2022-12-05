const boolean = false;
const nullCustom = null;
const undefinedCustom = undefined;
const isAge = 0;
const isName = 'Maryna'; // '' - empty string is always FALSE !
// && - and , || - or
//isName === false - nobody wrtie like this
//isName
//or if you want to check on false condition you should write !isAge
// !isAge will be equal to isAge === false
if (!isAge || isName || boolean || nullCustom || !undefinedCustom) {
	console.log('TRUE');
} else {
	console.log('FALSE');
}

// Место для первой задачи
function firstTask() {
	let count = 5;
	for (let i = count; i <= 10; i++) {
		console.log(count++);
	}
}

// Место для второй задачи
function secondTask() {
	// Пишем решение вот тут
	let count = 20;
	for (let i = count; i > 10; i--) {
		if (i === 13) break;
		console.log(count--);
	}
}

// Место для третьей задачи
function thirdTask() {
	// Пишем решение вот тут
	for (let i = 2; i <= 10; i++) {
		if (i % 2 === 0) {
			console.log(i);
		}
	}
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
	var num = 1;
	while (num < 16) {
		num++;
		if (num % 2) console.log(num);
	}
}

// Место для пятой задачи

function fifthTask() {
	const arrayOfNumbers = [];

	// Пишем решение вот тут
	for (let i = 5; i <= 10; i++) {
		arrayOfNumbers.push(i);
	}

	// Не трогаем
	return arrayOfNumbers;
}

const arr = [];
for (let i = 5; i <= 10; i++) arr.push(i);
console.log(arr);

//
function firstTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const arr = [3, 5, 8, 16, 20, 23, 50];
	const result = [];

	// Пишем решение вот тут
	//result = [...arr]
	for (const elem of arr) result.push(elem);

	// Не трогаем
	return result;
}
console.log(firstTask());

// Место для второй задачи
function secondTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const data = [5, 10, 'Shopping', 20, 'Homework'];
	const result = [];

	// Пишем решение вот тут
	for (let elem of data) {
		if (typeof elem === 'number') {
			elem = elem * 2;
			result.push(elem);
		} else {
			const str = `${elem} - done`;
			result.push(str);
		}
	}

	// Не трогаем
	return result;
}
console.log(secondTask());

// Место для третьей задачи
function thirdTask() {
	// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
	const data = [5, 10, 'Shopping', 20, 'Homework'];
	const result = [];

	// Пишем решение вот тут

	// Не трогаем
	return result;
}

// FUNCTION

const arrOfUsers = [
	{ name: 'Masha', salary: 0, age: 20 },
	{ name: 'Ruslan', salary: 2000, age: 23 },
	{ name: 'Tatiana', salary: 600, age: 45 },
	{ name: 'Dasha', salary: 300, age: 20 },
	{ name: 'Sergey', salary: 100, age: 22 },
];

const arrOfAnimals = [
	{ type: 'Cat', name: 'Archee', age: 16 },
	{ type: 'Dog', name: 'Shery', age: 9 },
	{ type: 'Dog', name: 'Bulbik', age: 5 },
];
/* 
const sortedArrOfAniamls = arrOfAnimals.sort((a, b) => b.age - a.age);
console.log(sortedArrOfAniamls[0])
const sortedArrOfUsers = arrOfUsers.sort((a, b) => b.age - a.age);
console.log(sortedArrOfUsers[0]) 
*/

const findOldest = arr => {
	const sortedArr = arr.sort((a, b) => b.age - a.age);
	return sortedArr[0];
};

console.log(findOldest(arrOfUsers));
console.log(findOldest(arrOfAnimals));

console.log(findBiggestSalary(arrOfUsers));

//function declaration может быть использована до того как была создана
function findBiggestSalary(arr) {
	const sortedArr = arr.sort((a, b) => b.salary - a.salary);
	console.log(sortedArr);
	return sortedArr[sortedArr.length - 1];
}

//как переменные попадают в аргументы функций
function explainMasheHowToWorkFunction(name, surname, age) {
	return { name, surname, age };
}
console.log(explainMasheHowToWorkFunction('Masha', 'Postoiuk', 20));

function sayHello(name) {
	return `Привет, ${name}!`;
}

sayHello('Alex');

function returnNeighboringNumbers(num) {
	return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);

function getMathResult(num, times) {
	if (typeof times !== 'number' || times <= 0) {
		return num;
	}

	let str = '';

	for (let i = 1; i <= times; i++) {
		if (i === times) {
			str += `${num * i}`;
			// Тут без черточек в конце
		} else {
			str += `${num * i}---`;
			// Это тоже самое, что и
			// str = str + num * i + "---"
		}
	}

	return str;
}

//
function getMathResult(num, numToCount) {
	if (typeof numToCount === 'string' || numToCount <= 0) return num;
	let counter = 0;
	let str = '';
	console.log(Masha);
	for (let i = 0; i <= numToCount; i++) {
		const Masha = 'girl';
		console.log(Ruslan, Masha);
		if (i === numToCount) {
			str += `${(counter += num)}`;

			const Ruslan = 'boy';
			console.log(Ruslan, Masha);
		} else {
			str += `${(counter += num)}---`;
		}
	}
	return str;
}
const resultOfNumber3and5 = getMathResult(10, 0);
const resultOfNumber10and10 = getMathResult(10, '10');
if (resultOfNumber3and5 === resultOfNumber10and10) {
	console.log('EQUAL !');
} else console.log('NOT EQUAL');
