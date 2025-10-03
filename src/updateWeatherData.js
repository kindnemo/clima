import { currentWeatherData, currentLocationData } from "./collectWeatherData";

// Entire weather data of the current location
const {weatherData, locationData} = await currentWeatherData(); 

// Entire location data of the current location

// UI ELEMENTS
const cityName = document.getElementById("city-name");
const currentDate = document.getElementById("current-date");
const weatherDescription = document.getElementById("weather-description");
const currentTemp = document.getElementById("current-temperature");
const feelsLike = document.getElementById("feels-like-value");
const humidity = document.getElementById("humidity-value");
const windSpeed = document.getElementById("wind-speed-value");
const uvIndex = document.getElementById("uv-index-value");
const hourlyTempNode = document.querySelectorAll(".hourly-temperature");
const airQualityNumber = document.getElementById("air-quality-number");
const airQualityRemark = document.getElementById("air-quality-remark");


// Function to display current weather data on the webpage
export async function updateData() {
    // Update city name and country
    cityName.textContent = `${locationData.location.city}, ${locationData.location.country_name}`;
    
    // Update current date
    // Get timezone from location data and format date accordingly
    const timezone = locationData.location.timezone;
    const date = new Date().toLocaleDateString("en-US", { timeZone: timezone, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    currentDate.textContent = date;

    // Update weather information
    // Update Weather Description
    weatherDescription.textContent = `${weatherData.weather.currentConditions.conditions}`;
    currentTemp.textContent = `${weatherData.weather.currentConditions.temp}°C`;
    feelsLike.textContent = `${weatherData.weather.currentConditions.feelslike}°C`;
    humidity.textContent = `${weatherData.weather.currentConditions.humidity}%`;
    windSpeed.textContent = `${weatherData.weather.currentConditions.windspeed} km/h`;
    uvIndex.textContent = `${weatherData.weather.currentConditions.uvindex}`;

}
