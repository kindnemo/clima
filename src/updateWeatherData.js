import { fetchWeatherData } from "./weatherFetch";
import { fetchLocationData } from "./locationFetch";
// Entire weather data of the current location
const weatherData = await fetchWeatherData();

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
    cityName.textContent = `${weatherData.resolvedAddress}`;

    // update current date
    const timezone = weatherData.timezone; // e.g., "America/New_York"
    const locationTime = new Date(new Date().toLocaleString("en-US", { timeZone: timezone }));


    // Now using the timezone info to get current date/time
    currentDate.textContent = new Date().toLocaleString("en-US", {
        timeZone: timezone,
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    // Update weather description
    weatherDescription.textContent = weatherData.currentConditions.conditions;

    // Update current temperature
    currentTemp.textContent = `${Math.round(weatherData.currentConditions.temp)}°C`;    

    // Update "feels like" temperature
    feelsLike.textContent = `${Math.round(weatherData.currentConditions.feelslike)}°C`;

    // Update humidity
    humidity.textContent = `${weatherData.currentConditions.humidity}%`;

    // Update wind speed
    windSpeed.textContent = `${Math.round(weatherData.currentConditions.windspeed)} km/h`;

    // Update UV index
    uvIndex.textContent = weatherData.currentConditions.uvindex;

    // Update hourly temperatures for the next 12 hours
    const currentDay = 0; // Assuming we are looking at today's data
    const currentHour = locationTime.getHours();
    
    if(currentHour <= 19){
        for (let i = 0; i < 4; i++) {
            hourlyTempNode[i].textContent = `${Math.round(weatherData.days[currentDay].hours[currentHour + i].temp)}°C`;
        }
    }else {
        let changeDayOn = 24 - currentHour;
        let counter = 0;
        for (let i = 0; i < 4; i++) {
            if(i == changeDayOn){
                counter = 0;
            }
            hourlyTempNode[i].textContent = `${Math.round(weatherData.days[currentDay + 1].hours[counter].temp)}°C`;
            counter++;
        }
    }

    // Update air quality index and remark
    // Whoever is reading this, please forgive the hardcoding, since the free tier of Visual Crossing API does not provide air quality data.
    // I will simulate air quality data for demonstration purposes by randomly generating values between 0 and 300.
    const simulatedAQI = Math.floor(Math.random() * 251);
    airQualityNumber.textContent = simulatedAQI;

    // Update air quality remark based on the simulated AQI
    if (simulatedAQI <= 50) {
        airQualityNumber.style.color = "green";
        airQualityRemark.textContent = "Good";
    } else if (simulatedAQI <= 100) {
        airQualityNumber.style.color = "light-yellow";
        airQualityRemark.textContent = "Moderate";
    } else if (simulatedAQI <= 150) {
        airQualityNumber.style.color = "orange";
        airQualityRemark.textContent = "Unhealthy";
    } else if (simulatedAQI <= 200) {
        airQualityNumber.style.color = "red";
        airQualityRemark.textContent = "Unhealthy";
    } else if (simulatedAQI <= 300) {
        airQualityNumber.style.color = "purple";
        airQualityRemark.textContent = "Hazardous";
    } else {
        airQualityNumber.style.color = "maroon";
        airQualityRemark.textContent = "Very Hazardous";
    }

    // Updating 5-day forecast
    


}
