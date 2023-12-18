const param = {
	"url": "https://api.openweathermap.org/data/2.5/",
	"appid": "9d1664856b3228be76d4baa385e3ae7b"
}

const cities = {
	709930: "Dnipro",
	689558: "Vinnytsya",
	709717: "Donetsk",
	686967: "Zhytomyr",
	687700: "Zaporizhia",
	707471: "Ivano-Frankivsk",
}

function createSelect() {

	let select = document.createElement('select');

	for (const key in cities) {
		let option = document.createElement('option');
		option.value = key;
		option.text = cities[key];
		if (option.text === "Dnipro") {
			option.setAttribute('selected', 'true');
		}
		select.append(option);
	}

	select.classList.add('form-select', 'text-center', 'text-uppercase');
	select.setAttribute('id', 'city');
	select.setAttribute('name', 'cityId');
	document.querySelector('.weather-info').prepend(select)
	select.addEventListener('change', getWeather);
	getWeather()
}
createSelect()


function getWeather() {
	const cityId = document.querySelector('#city').value;
	console.log(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`);
	fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
		.then(weather => {
			return weather.json();
		}).then(showWeather);

}

getWeather();

function showWeather(data) {
	console.log(data);
	document.querySelector('.weather-info__city').textContent = data.name;
	document.querySelector('.weather-info__temp').innerHTML = 'Temperature: ' + Math.round(data.main.temp) + '&deg;C';
	document.querySelector('.weather-info__image').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
	document.querySelector('.weather-info__description').textContent = data.weather[0]['description'];
	document.querySelector('.weather-info__wind').innerHTML = 'wind direction: ' + data.wind['deg'] + '&deg;';
	document.querySelector('.weather-info__wind-speed').innerHTML = 'wind speed: ' + data.wind['speed'] + ' meter/sec';
	document.querySelector('.weather-info__pressure').innerHTML = 'atmosphere pressure: ' + data.main['pressure'] + ' mbar';
}
