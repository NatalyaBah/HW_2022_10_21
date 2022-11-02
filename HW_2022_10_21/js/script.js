// Задание 1
// Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость),
// и следующие функции для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

let car = {
	manuf: "Lada",
	model: "Приора",
	speed: 80,
	year: 1995
}

function showCar(car) {
	console.log("Информация о вашем автомобиле");
	console.log(`Производитель : ${car.manuf}`);
	console.log(`Модель : ${car.model}`);
	console.log(`Средняя скорость : ${car.speed} км/ч`);
	console.log(`Год выпуска : ${car.year} год`);
}

showCar(car);

function summTime(km) {
	let relax = 0;
	let time = 0;
	time = Math.floor(km / car.speed);
	if (time <= 4) {
		return (`Вам ехать ${km} км со средней скоростью ${car.speed} км/ч ${time} час/а/ов. Вам отдых не требуется.`);
	}
	else {
		if (time % 5 == 0) {
			relax = Math.ceil((time / 4) - 1);
			time += relax;
			return (`Вам ехать ${km} км со средней скоростью ${car.speed} км/ч ${time} час/а/ов. На отдых вы потратите ${relax} час/а/ов`);
		}
	}
}
console.log(`Задание №1 : ${summTime(340)}`);

// Задание 2
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.

let fraction = {
	numerator: 1,
	denominator: 5
}

const fractShow = function () {
	return `${fraction.numerator} / ${fraction.denominator}`;
}

function makeFrac(numerator, denominator) {
	return {
		numerator,
		denominator
	};
}
let fraction1 = makeFrac(2, 9);
console.log("Задание №2 : ");
//общий знаменатель
function commonDenominator(fraction, fraction1) {
	return fraction.denominator * fraction1.denominator;
}

//сложение дробей
function summFraction(fraction, fraction1) {
	return `${fraction.numerator * fraction1.denominator + fraction1.numerator * fraction.denominator} / ${commonDenominator(fraction, fraction1)}`;
}
console.log(summFraction(fraction, fraction1));
console.log(summFraction({ numerator: 5, denominator: 7 }, { numerator: 4, denominator: 5 }));

//вычитание дробей
function minusFraction(fraction, fraction1) {
	return `${fraction.numerator * fraction1.denominator - fraction1.numerator * fraction.denominator} / ${commonDenominator(fraction, fraction1)}`;
}
console.log(minusFraction({ numerator: 7, denominator: 18 }, { numerator: 3, denominator: 8 }));

//умножение дробей
function multFraction(fraction, fraction1) {
	return `${fraction.numerator * fraction1.numerator} / ${fraction.denominator * fraction1.denominator}`;
}
console.log(multFraction(fraction, fraction1));

//деление дробей
function divFraction(fraction, fraction1) {
	return `${fraction.numerator * fraction1.denominator} / ${fraction.denominator * fraction1.numerator}`;
}
console.log(divFraction(fraction, fraction1));

//Сокращение дробей
function redustionFraction(fraction3, n) {
	return `${fraction3.numerator / n}/${fraction3.denominator / n}`;
}
const fraction3 = makeFrac(5, 25);
console.log(redustionFraction(fraction3, 5));

// Задание 3
// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество секунд.
// 3. Функция изменения времени на переданное количество минут.
// 4. Функция изменения времени на переданное количество часов.
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например: 
// если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

let time = {
	hour: 23,
	min: 24,
	sec: 20
}

function exemTime(time) {
	if (time.hour == 24) time.hour = `00`;
	else if (time.hour < 10 && time.hour >= 0) time.hour = `0${time.hour}`;
	if (time.min < 10 && time.min >= 0) time.min = `0${time.min}`;
	else time.min;
	if (time.sec < 10 && time.sec >= 0) time.sec = `0${time.sec}`;
	else time.sec;
}

function showTime(time) {
	exemTime(time);
	console.log(`Время ${time.hour}:${time.min}:${time.sec}`);
}
console.log("Задание № 3 : ");
showTime(time);

function addSec(s) {
	time.sec += s;
	s = time.sec % 60;
	time.min += Math.floor(time.sec / 60);
	let m = time.min % 60;
	time.hour += Math.floor(time.min / 60);
	let h = time.hour % 60;
	time.hour = h;
	time.min = m;
	time.sec = s;
}
console.log("Изменение времени на переданное количество сеунд");
addSec(50);
showTime(time);

function addMin(m) {
	time.min += m;
	m = +time.min % 60;
	time.hour += Math.floor(time.min / 60);
	let h = time.hour % 60;
	time.hour = h;
	time.min = m;
}
console.log("Изменение времени на количество переданных миниут");
addMin(5);
showTime(time);

function addHour(h) {
	time.hour += h;
	h = time.hour % 24;
	time.hour = h;
}
console.log("Изменение времени на количество переданных часов");
addHour(2);
showTime(time);