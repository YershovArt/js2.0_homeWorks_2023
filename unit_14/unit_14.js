
fetch(`http://api.openweathermap.org/data/2.5/weather?id=709930&appid=9d1664856b3228be76d4baa385e3ae7b`)
	.then(function (resp) { return resp.json() })
	.then(function (data) {
		console.log(data);
		document.querySelector('.data').textContent = data.name;
		document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
		document.querySelector('.description').textContent = data.weather[0]['description'];
		document.querySelector('.image').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
	})
	.catch(function () {
		
	});

function getWeatherData(url) {
	fetch(url)
		.then(function (resp) { return resp.json() })
		.then(function (data) {
			document.querySelector('.data').textContent = data.name;
			document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
			document.querySelector('.description').textContent = data.weather[0]['description'];
			document.querySelector('.image').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
		})
		.catch(function () {

		});
}

function addCityId() {
	let INFO = this.value;
	console.log(INFO);
	let url = `http://api.openweathermap.org/data/2.5/weather?id=${INFO}&appid=9d1664856b3228be76d4baa385e3ae7b`;
	getWeatherData(url);
}

const cityId = document.querySelector('#city').addEventListener('change', addCityId);
