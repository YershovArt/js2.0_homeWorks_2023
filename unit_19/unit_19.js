
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
	let out = document.querySelector('.out-1')
	out.textContent = this.textContent;
	return out.textContent;
}

// ваше событие здесь!!!
document.querySelector('.div-1').addEventListener('click', t1);

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(event) {
	document.querySelector('.out-2').textContent = event.altKey;
	return event.altKey;
}

// ваше событие здесь!!!
document.querySelector('.div-2').addEventListener('click', t2);



// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
	w3 += 5;
	this.style.width = `${w3}px`;
	document.querySelector('.out-3').textContent = `${w3}px`;
}

// ваше событие здесь!!!
document.querySelector('.div-3').addEventListener('click', t3);


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
	let out = document.querySelector('.out-4');
	out.textContent = this.textContent;
	return out.textContent;
}

// ваше событие здесь!!!
document.querySelector('.div-4').addEventListener('dblclick', t4);
// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
	this.classList.toggle('active');
}

// ваше событие здесь!!!
document.querySelector('.div-5.active').addEventListener('dblclick', t5);

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
	document.querySelector('.ul-6').classList.toggle('hide');
}

// ваше событие здесь!!!
document.querySelector('.div-6').addEventListener('dblclick', t6);

// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7(event) {
	event.preventDefault();
	this.classList.toggle('active');
}
document.querySelector('.div-7').addEventListener('contextmenu', t7);
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function t8() {
	console.log();
	this.checked ? document.body.oncontextmenu = function (event) {
		return false;
	} : document.body.oncontextmenu = function (event) {
		return true;
	}
}

// ваше событие здесь!!!
document.querySelector('.ch-8').addEventListener('change', t8)


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9(event) {
	event.preventDefault();
	this.firstElementChild.src = 'img/2.png';
}

// ваше событие здесь!!!
document.querySelector('.div-9').addEventListener('contextmenu', t9);

// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
	this.firstElementChild.src = 'img/2.png';
}

// ваше событие здесь!!!
document.querySelector('.div-10').addEventListener('mouseenter', t10);
// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11(event) {
	if (event.type === 'mouseenter') {
		this.firstElementChild.src = 'img/2.png';
	} else if (event.type === 'mouseleave') {
		this.firstElementChild.src = 'img/1.png';
	}
}

// ваше событие здесь!!!
document.querySelector('.div-11').addEventListener('mouseenter', t11);
document.querySelector('.div-11').addEventListener('mouseleave', t11);


// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

// функцию пишите самостоятельно
function t12() {
	this.classList.add('active');
}

// ваше событие здесь!!!
document.querySelector('.div-12').addEventListener('mousedown', t12);

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

// функцию пишите самостоятельно
function t131() {
	this.classList.toggle('active');
}

// ваше событие здесь!!!
document.querySelector('.div-13').addEventListener('mousedown', t131);
document.querySelector('.div-13').addEventListener('mouseup', t131);


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

let div14 = document.querySelector('.div-14')
function t14() {
	div14.onclick = t14_1;
}

function t14_1() {
	div14.classList.add('active');
}

document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

let div = document.querySelector('.div-15');
let numValue = +div.textContent
function t15() {
	div.textContent = ++numValue;
}
// ваше событие здесь!!!
div.addEventListener('mousemove', t15);

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
let div16 = document.querySelector('.div-16');
let num = +div16.offsetWidth;
function t16() {
	div16.style.width = ++num+'px';
}
// ваше событие здесь!!!
div16.addEventListener('mousemove', t16);
// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
	div16.addEventListener('mousemove', t16);
}
function t17Off() {
	div16.removeEventListener('mousemove', t16);
}
// ваше событие здесь!!!
// ваше событие здесь!!!
document.querySelector('.b-17_on').addEventListener('click', t17On);
document.querySelector('.b-17_off').addEventListener('click', t17Off);;
// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */



function t18() {
	this.textContent = this.offsetWidth;
}
// ваше событие здесь!!!
document.querySelector('.div-18').addEventListener('mouseenter', t18);
// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

function t19() {
	// let out = '';
	// for (const item of this.classList) {
	// 	out += `${item} `
	// }
	// this.textContent = out;
	this.textContent = this.classList;
}
// ваше событие здесь!!!
document.querySelector('.div-19').addEventListener('mouseout', t19);

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
let progress = document.querySelector('progress');
let progressValueNumber = +progress.value
function t20() {
	progress.value = ++progressValueNumber;
}
// ваше событие здесь!!!
progress.addEventListener('mousemove', t20);