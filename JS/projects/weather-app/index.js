// DOM Elements
const locationInput = document.getElementById('location-input');
const searchBtn = document.getElementById('search-btn');
const locationBtn = document.getElementById('location-btn');
const cityName = document.getElementById('city-name');
const currentDate = document.getElementById('current-date');
const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const weatherDesc = document.getElementById('weather-desc');
const windSpeed = document.getElementById('wind-speed');
const humidity = document.getElementById('humidity');
const feelsLike = document.getElementById('feels-like');
const pressure = document.getElementById('pressure');
const forecastContainer = document.getElementById('forecast-container');

// API Configuration
const apiKey = '1325e63c6ea5350145034a215a822516';
const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?';
const forecastBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast?';
const units = 'metric';

// Initialize the app with default city
document.addEventListener('DOMContentLoaded', () => {
    getWeatherByCity('Cairo');
});

// Event Listeners
searchBtn.addEventListener('click', () => {
    const city = locationInput.value.trim();
    if (city) {
        getWeatherByCity(city);
    }
});

locationInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const city = locationInput.value.trim();
        if (city) {
            getWeatherByCity(city);
        }
    }
});

locationBtn.addEventListener('click', getWeatherByLocation);

// Functions
async function getWeatherByCity(city) {
    try {
        // Show loading state
        document.querySelector('.weather-app').classList.add('loading');

        // Fetch current weather
        const weatherResponse = await fetch(`${weatherBaseUrl}q=${city}&units=${units}&appid=${apiKey}`);
        if (!weatherResponse.ok) {
            throw new Error('City not found');
        }
        const weatherData = await weatherResponse.json();

        // Fetch forecast
        const forecastResponse = await fetch(`${forecastBaseUrl}q=${city}&units=${units}&appid=${apiKey}`);
        if (!forecastResponse.ok) {
            throw new Error('Forecast not available');
        }
        const forecastData = await forecastResponse.json();

        // Update UI
        updateCurrentWeather(weatherData);
        updateForecast(forecastData);

        // Clear any previous errors
        clearError();
    } catch (error) {
        showError(error.message);
    } finally {
        document.querySelector('.weather-app').classList.remove('loading');
    }
}

async function getWeatherByLocation() {
    if (navigator.geolocation) {
        try {
            // Show loading state
            document.querySelector('.weather-app').classList.add('loading');

            // Get current position
            const position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
            });

            const { latitude, longitude } = position.coords;

            // Fetch current weather
            const weatherResponse = await fetch(`${weatherBaseUrl}lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`);
            if (!weatherResponse.ok) {
                throw new Error('Location weather not available');
            }
            const weatherData = await weatherResponse.json();

            // Fetch forecast
            const forecastResponse = await fetch(`${forecastBaseUrl}lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`);
            if (!forecastResponse.ok) {
                throw new Error('Location forecast not available');
            }
            const forecastData = await forecastResponse.json();

            // Update UI
            updateCurrentWeather(weatherData);
            updateForecast(forecastData);

            // Clear input and any previous errors
            locationInput.value = '';
            clearError();
        } catch (error) {
            showError(error.message);
        } finally {
            document.querySelector('.weather-app').classList.remove('loading');
        }
    } else {
        showError('Geolocation is not supported by your browser');
    }
}

function updateCurrentWeather(data) {
    cityName.textContent = `${data.name}, ${data.sys.country}`;
    currentDate.textContent = formatDate(new Date());
    currentTemp.textContent = Math.round(data.main.temp);
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = data.weather[0].description;
    weatherDesc.textContent = data.weather[0].description;
    windSpeed.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
    humidity.textContent = `${data.main.humidity}%`;
    feelsLike.textContent = `${Math.round(data.main.feels_like)}°C`;
    pressure.textContent = `${data.main.pressure} hPa`;
}

function updateForecast(data) {
    // Clear previous forecast
    forecastContainer.innerHTML = '';

    // Filter to get one forecast per day (at 12:00 PM)
    const dailyForecasts = data.list.filter(item => {
        return item.dt_txt.includes('12:00:00');
    }).slice(0, 5);

    // Add forecast items
    dailyForecasts.forEach(forecast => {
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';

        const day = document.createElement('div');
        day.className = 'forecast-day';
        day.textContent = formatDay(new Date(forecast.dt * 1000));

        const icon = document.createElement('img');
        icon.className = 'forecast-icon';
        icon.src = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`;
        icon.alt = forecast.weather[0].description;

        const temp = document.createElement('div');
        temp.className = 'forecast-temp';
        temp.textContent = `${Math.round(forecast.main.temp)}°C`;

        forecastItem.appendChild(day);
        forecastItem.appendChild(icon);
        forecastItem.appendChild(temp);

        forecastContainer.appendChild(forecastItem);
    });
}

function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function formatDay(date) {
    const options = { weekday: 'short' };
    return date.toLocaleDateString('en-US', options);
}

function showError(message) {
    // Remove any existing error message
    clearError();

    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.textContent = message;

    // Insert error message after the header
    document.querySelector('header').insertAdjacentElement('afterend', errorElement);
}

function clearError() {
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
}