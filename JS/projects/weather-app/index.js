// DOM Elements 
const currentTemp = document.getElementById('current-temp')


// API Configuration
const apiKey = '1325e63c6ea5350145034a215a822516';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const units = 'metric'
let city = 'cairo'
async function fetchWeather(city) {
    const response = await fetch(baseUrl + `units=${units}&q=${city}&appid=${apiKey}`)
    if (!response.ok) {
        console.log("city not found")

    }

    const weatherData = await response.json();
    return weatherData;
}


async function desplayWeather() {

    const weatherData = await fetchWeather(city);
    currentTemp.textContent = weatherData.main.temp
    console.log(weatherData.main.feels_like)
}

desplayWeather()

functioupdate 