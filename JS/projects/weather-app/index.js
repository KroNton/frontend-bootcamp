
// API Configuration
const apiKey = '1325e63c6ea5350145034a215a822516';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const units = 'metric'
let city = 'cairo'
async function checkWeather() {
    let weatherData = null
    const response = await fetch(baseUrl + `units=${units}` + `&q=${city}` + `&appid=${apiKey}`, {
        method: "GET"
    }).then((data) => {

        return data.json();
    }).then((data) => {
        weatherData = data
    })
    return weatherData
}

let weatherData = checkWeather()

console.log(weatherData)