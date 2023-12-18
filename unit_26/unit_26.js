// ВНИМАНИЕ!!! Не пишите apikey в тасках напрямую. Применяйте константу APIKEY (задать ее значение можно в файле config.js).

// Task 1
// При нажатии кнопки .b-1, срабатывает функция f1. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/employee/read
// method: GET

// Результат - объект со списком сотрудников. Выведите в out-1 возраст сотрудников через пробел.
// не забывайте для авторизации отправлять apikey с указанным ключом.

async function f1() {
	let out = '';

	const access = new Headers();
	access.append('apikey', APIKEY);

	let data = await fetch(URL + '/api/26/employee/read', {
		method: 'GET',
		headers: access,
	});
	let res = await data.json();

	for (const key in res.result) {
		out += `${res.result[key].age} `;
	}

	document.querySelector('.out-1').textContent = out;
}

document.querySelector('.b-1').addEventListener('click', f1);


// Task 2
// При нажатии кнопки .b-2, срабатывает функция f2. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/employee/read?id=3
// method: GET
// в качестве query параметра задайте id равный числу из input .i-2

// Результат - объект с описанием сотрудника. Выведите в out-2 email полученного сотрудника.



async function f2() {
	let inputPar = document.querySelector('.i-2').value;

	const access = new Headers();
	access.append('apikey', APIKEY);

	let data = await fetch(URL + '/api/26/employee/read' + `?id=${inputPar}`, {
		method: 'GET',
		headers: access,
	});
	let res = await data.json();

	let resultArr = res.result
	document.querySelector('.out-2').textContent = resultArr['email'];
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// При нажатии кнопки .b-3 срабатывает функция f3. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// /api/26/employee/read/5
// method: POST
// число 5 получите из input .i-3

// Результат - объект с описанием сотрудника. Выведите в out-3 name полученного сотрудника.

async function f3() {
	let inputPar = document.querySelector('.i-3').value;

	const access = new Headers();
	access.append('apikey', APIKEY);

	let data = await fetch(URL + '/api/26/employee/read/' + `${inputPar}`, {
		method: 'POST',
		headers: access,
	});

	let res = await data.json();
	let resultArr = res.result;

	document.querySelector('.out-3').textContent = resultArr['name'];
}

document.querySelector('.b-3').onclick = f3;


// Task 4. 
// При нажатии кнопки .b-4 срабатывает функция f4. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read
// method: POST

// Результат - объект с описанием рас игры КР. Выведите в out-4 название рас (title) через пробел.


async function f4() {
	let out = '';
	const access = new Headers();
	access.append('apikey', APIKEY);

	let data = await fetch(URL + '/api/26/sr/read', {
		method: 'POST',
		headers: access,
	});

	let res = await data.json();
	let resultArr = res.result;

	for (const key in resultArr) {
		out += `${res.result[key].title} `
	}

	document.querySelector('.out-4').textContent = out;
}

document.querySelector('.b-4').onclick = f4;

// Task 5. 
// При нажатии кнопки .b-5 срабатывает функция f5. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read?race=gaal
// method: GET
// где gaal - название расы полученное из select .s-5

// Результат - объект с описанием указанной расы. Выведите в out-5 описание расы (description). Вывод осуществляйте через innerHTML.


async function f5() {
	let inputPar = document.querySelector('.s-5').value;
	const access = new Headers();
	access.append('apikey', APIKEY);

	let data = await fetch(URL + '/api/26/sr/read' + `?race=${inputPar}`, {
		method: 'GET',
		headers: access,
	});

	let res = await data.json();
	let resultArr = res.result;

	document.querySelector('.out-5').innerHTML = resultArr.description;
}

document.querySelector('.b-5').onclick = f5;


// Task 6.
// При нажатии кнопки .b-6 срабатывает функция f6. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/run
// method: GET
// поскольку такого адреса в API не предусмотрено, то сервер должен вернуть ошибку 404
// выведите статус ответа сервера в .out-6-status

async function f6() {
	const access = new Headers();
	access.append('apikey', APIKEY);

	let data = await fetch(URL + '/api/26/run', {
		method: 'GET',
		headers: access,
	});

	document.querySelector('.out-6-status').innerHTML = data.status;
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// При нажатии кнопки .b-7 срабатывает функция f7. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/sr/read/human
// method: POST
// human - название расы из select .s-7

// Результат - объект с описанием указанной расы. Выведите в out-7 изображение расы. Картинку формируйте через createElement. 
// В начале функции делайте очистку .out-7.


async function f7() {
	let inputPar = document.querySelector('.s-7').value;
	let output = document.querySelector('.out-7');

	output.innerHTML = '';

	const access = new Headers();
	access.append('apikey', APIKEY);

	let data = await fetch(URL + '/api/26/sr/read/' + `${inputPar}`, {
		method: 'POST',
		headers: access,
	});

	let res = await data.json();
	let resultArr = res.result;
	let img = document.createElement('img');
	let srcString = resultArr.image;
	img.setAttribute('src', `${URL}${srcString}`)
	output.append(img);

}

document.querySelector('.b-7').onclick = f7;

// Task 8.
// При нажатии кнопки .b-8 срабатывает функция f8. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number
// method: GET
// если запрос отправлен верно, то будет получен объект со случайным числом
// выведите в .out-8 данное число.

async function f8() {
	const access = new Headers();
	access.append('apikey', APIKEY);

	let data = await fetch(URL + '/api/26/random/random-number', {
		method: 'GET',
		headers: access,
	});

	let res = await data.json();
	document.querySelector('.out-8').textContent = res[`random-number`];
}

document.querySelector('.b-8').onclick = f8;

// Task 9
// При нажатии кнопки .b-9 срабатывает функция f9. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number?min=100&max=110
// method: GET
// где min - число из переменной min. Max - число из переменной max.

// если запрос отправлен верно, то будет получен объект со случайным число от min до max.
// выведите число в .out-9

let min = 400;
let max = 500;

async function f9() {
	const access = new Headers();
	access.append('apikey', APIKEY);

	let data = await fetch(URL + '/api/26/random/random-number' + `?min=${min}&max=${max}`, {
		method: 'GET',
		headers: access,
	});

	let res = await data.json();
	document.querySelector('.out-9').textContent = res[`random-number`];
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// При нажатии кнопки .b-10 срабатывает функция f10. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-number
// method: POST
// в теле POST запроса передайте параметры min равные переменной min и max равное переменной max. Формат - formdata.

// если запрос отправлен верно, то будет получен объект со случайным число от min до max.
// выведите число в .out-10

async function f10() {
	const access = new Headers();
	access.append('apikey', APIKEY);

	let formData = new FormData();
	formData.append('min', min);
	formData.append('max', max);

	let data = await fetch(URL + '/api/26/random/random-number', {
		method: 'POST',
		headers: access,
		body: formData,
	});

	let res = await data.json();
	document.querySelector('.out-10').textContent = res[`random-number`];
}

document.querySelector('.b-10').onclick = f10;

// Task 11
// При нажатии кнопки .b-11 срабатывает функция f11. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/random-string?length=16
// method: GET
// Значение длины строки получаем из input .i-11

// Если запрос сделан правильно, то сервер возвратит объект с строкой случайных символов длиной 16.
// Выведите строку в .out-11

async function f11() {

	let inputPar = document.querySelector('.i-11').value;

	const access = new Headers();
	access.append('apikey', APIKEY);

	let data = await fetch(URL + '/api/26/random/random-string' + `?length=${inputPar}`, {
		method: 'GET',
		headers: access,
	});

	let res = await data.json();

	document.querySelector('.out-11').textContent = res['random-string'];
}

document.querySelector('.b-11').onclick = f11;

// Task 12
// При нажатии кнопки .b-12 срабатывает функция f12. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-12 (form-data) 
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-12
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы
// выведите в .out-12 полученный пароль.



async function f12() {
	let length = document.querySelector('.i-12').value;
	let symbols = document.querySelector('.ch-12').checked;

	const access = new Headers();
	access.append('apikey', APIKEY);

	let formData = new FormData();
	formData.append('length', length);
	formData.append('symbols', symbols || 0);

	let data = await fetch(URL + '/api/26/random/generate-password', {
		method: 'POST',
		headers: access,
		body: formData,
	});

	let res = await data.json();

	document.querySelector('.out-12').textContent = res.password;
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// При нажатии кнопки .b-13 срабатывает функция f13. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/random/generate-password
// method: POST
// укажите в body POST запроса аргумент length равный числу из input .i-13 (form-data) 
// укажите в body POST запроса аргумент symbols равный 0 или 1, данные берем из состояния checkbox .ch-131
// укажите в body POST запроса аргумент uppercase равный 0 или 1, данные берем из состояния checkbox .ch-132
// если запрос отправлен верно, то будет возвращен пароль длиной равный указанной длине и если указан symbols равный 1 то в пароле будут спецсимволы, и аналогично если uppercase равен 1 то будут символы в разных регистрах.
// выведите в .out-13 полученный пароль.


// не забывайте для авторизации отправлять apikey с указанным ключом.

async function f13() {
	let length = document.querySelector('.i-13').value;
	let symbols = document.querySelector('.ch-131').checked;
	let uppercase = document.querySelector('.ch-132').checked;

	const access = new Headers();
	access.append('apikey', APIKEY);

	let formData = new FormData();
	formData.append('length', length);
	formData.append('symbols', symbols || 0);
	formData.append('uppercase', uppercase || 0);

	let data = await fetch(URL + '/api/26/random/generate-password', {
		method: 'POST',
		headers: access,
		body: formData,
	});

	let res = await data.json();
	document.querySelector('.out-13').textContent = res.password;
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// При нажатии кнопки .b-14 срабатывает функция f14. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/world
// method: GET
// если все сделано верно, то получите объект с описанием миров игры GoW
// выведите в .out-14 title миров через пробел. 

async function f14() {
	let out = '';
	const access = new Headers();
	access.append('apikey', APIKEY);

	let data = await fetch(URL + '/api/26/gow/world', {
		method: 'GET',
		headers: access,
	});

	let res = await data.json();
	let resultArr = res.worlds;

	for (const key in resultArr) {
		out += `${resultArr[key].title} `;
	}

	document.querySelector('.out-14').textContent = out;
}

document.querySelector('.b-14').onclick = f14;


// Task 15
// При нажатии кнопки .b-15 срабатывает функция f15. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/world/niflheim
// method: GET
// где niflheim - название мира полученное из .s-15
// выведите описание мира (description) в out-15

async function f15() {
	let valueOfWorld = document.querySelector('.s-15').value;

	const access = new Headers();
	access.append('apikey', APIKEY);

	let data = await fetch(URL + '/api/26/gow/world' + `/${valueOfWorld}`, {
		method: 'GET',
		headers: access,
	});

	let res = await data.json();
	document.querySelector('.out-15').textContent = res.world.description;
}


document.querySelector('.b-15').onclick = f15;

// Task 16
// При нажатии кнопки .b-16 срабатывает функция f16. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/governor/сурт
// method: GET
// имя правителя - получите из select .s-16
// если все сделано верно, то получите объект с описанием мира где правитель Сурт игры GoW. 
// выведите в .out-16 руну данного мира. Как изображение (createElement). Очищайте out-16 в начале функции.

async function f16() {
	let output = document.querySelector('.out-16');
	let valueOfRuler = document.querySelector('.s-16').value;
	output.innerHTML = '';

	const access = new Headers();
	access.append('apikey', APIKEY);

	let data = await fetch(URL + '/api/26/gow/governor' + `/${valueOfRuler}`, {
		method: 'GET',
		headers: access,
	});

	let res = await data.json();
	let resultArr = res.world;
	let image = document.createElement('img');
	let srcString = `${URL}${resultArr.rune}`;
	image.setAttribute('src', srcString);
	output.append(image);
}


document.querySelector('.b-16').onclick = f16;


// Task 17
// При нажатии кнопки .b-17 срабатывает функция f17. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/get-time
// method: POST
// если все сделано верно, то получите объект с текущим временем сервера.
// выведите в .out-17 время в формате час:минуты

async function f17() {
	const access = new Headers();
	access.append('apikey', APIKEY);

	let data = await fetch(URL + '/api/26/get-time', {
		method: 'POST',
		headers: access,
	});

	let res = await data.json();
	let timeData = res.time;
	document.querySelector('.out-17').textContent = `${timeData.h}:${timeData.m}`;
}


document.querySelector('.b-17').onclick = f17;


// Task 18
// При нажатии кнопки .b-18 срабатывает функция f18. Функция отсылает запрос методом FETCH на https://api.itgid.info со следующими параметрами:
// url: /api/26/gow/rune
// method: POST
// если все сделано верно, то получите объект с названиями миров и рунами
// выведите в .out-18 руны как изображения, а в качестве атрибута alt установите название мира. 
// выполните очистку .out-18 в начале функции

async function f18() {
	let output = document.querySelector('.out-18');
	output.innerHTML = ``;

	const access = new Headers();
	access.append('apikey', APIKEY);

	let data = await fetch(URL + '/api/26/gow/rune', {
		method: 'POST',
		headers: access,
	});

	let res = await data.json();
	let runesData = res.rune;

	let innerDiv = document.createElement('div');

	for (const key in runesData) {
		let image = document.createElement('img');
		let srcString = `${URL}${runesData[key]}`;
		image.setAttribute('src', srcString);
		image.setAttribute('alt', key);
		innerDiv.append(image);
	}

	output.append(innerDiv);
}


document.querySelector('.b-18').onclick = f18;
