import { fetchWeatherData } from "./weatherFetch";
import { fetchLocationData } from "./locationFetch";
import { icons } from "./loadIcons"; //Importing all icons 
// Entire weather data of the current location


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
const fiveDayNode = document.querySelectorAll(".day");
const fiveDayTempNode = document.querySelectorAll(".five-day-temperature");
const sunrise = document.getElementById("sunrise-value");
const sunset = document.getElementById("sunset-value");
const visibility = document.getElementById("visibility-value");
const pressure = document.getElementById("pressure-value");
const hourlyForecastTimeNodes = document.querySelectorAll(".hourly-forecast-time");

// ICONS
const weatherIcon = document.getElementById("weather-icon");
const feelsLikeIcon = document.getElementById("feels-like-icon");
const windSpeedIcon = document.getElementById("wind-speed-icon");
const uvIndexIcon = document.getElementById("uv-index-icon");
const fiveDayIcons = document.querySelectorAll(".five-day-icons");
const hourlyIcons = document.querySelectorAll(".hourly-icons");
const pressureIcon = document.getElementById("pressure-icon");
const visibilityIcon = document.getElementById("visibility-icon");




// Function to display current weather data on the webpage
export async function updateData(city) {
    console.log("working")
    console.log(city)
    const weatherData = await fetchWeatherData(city);
    console.log("working")
    // Update city name and country
    cityName.textContent = `${weatherData.resolvedAddress}`;
    let windSpeedValue = Math.round(weatherData.currentConditions.windspeed);
    let uvIndexValue = weatherData.currentConditions.uvindex;
    let pressureValue = weatherData.currentConditions.pressure;
    let visibilityValue = weatherData.currentConditions.visibility;

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
    windSpeed.textContent = `${windSpeedValue} km/h`;

    // Update UV index
    uvIndex.textContent = uvIndexValue;

    // Update hourly temperatures for the next 12 hours
    const currentDay = 0; // Assuming we are looking at today's data
    const currentHour = locationTime.getHours();
    
    if(currentHour <= 19){
        for (let i = 0; i < 4; i++) {
            hourlyTempNode[i].textContent = `${Math.round(weatherData.days[currentDay].hours
            [currentHour + i].temp)}°C`;
            hourlyIcons[i].src = icons[weatherData.days[currentDay].hours[currentHour + i].icon];
        }
    }else {
        let changeDayOn = 24 - currentHour;
        let counter = 0;
        for (let i = 0; i < 4; i++) {
            if(i == changeDayOn){
                counter = 0;
            }
            hourlyTempNode[i].textContent = `${Math.round(weatherData.days[currentDay + 1].hours[counter].temp)}°C`;
            hourlyIcons[i].src = icons[weatherData.days[currentDay + 1].hours[counter].icon];
            counter++;
        }
    }
    // Update hourly forecast time labels
    let isAM = false;
    for (let i = 0; i < 3; i++) {
        let forecastHour = (currentHour + i+1) % 12;
        // Figuring out if its AM or PM
        if (forecastHour === 0) {
            forecastHour = 12;
            isAM = true;
        }
        hourlyForecastTimeNodes[i].textContent = `${forecastHour} ${isAM ? 'AM' : 'PM'}`;
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
    // getting the current day and then updating the next 5 days
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = locationTime.getDay();
    for (let i = 1; i <= 5; i++) {
        const dayIndex = (today + i) % 7; // Wrap around using modulo
        const dayName = daysOfWeek[dayIndex];

        fiveDayNode[i - 1].textContent = dayName;
        fiveDayTempNode[i - 1].textContent = `${Math.round(weatherData.days[i].tempmax)}°C/${Math.round(weatherData.days[i].tempmin)}°C`;
        fiveDayIcons[i - 1].src = icons[weatherData.days[i].icon];
    }

    // Updating Today's Highlights
    // Sunrise time
    const sunriseTime = new Date(weatherData.days[0].sunriseEpoch * 1000).toLocaleTimeString("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
    });
    sunrise.textContent = sunriseTime;

    // Sunset time
    const sunsetTime = new Date(weatherData.days[0].sunsetEpoch * 1000).toLocaleTimeString("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
    });
    sunset.textContent = sunsetTime;

    // Pressure
    pressure.textContent = `${pressureValue} mb`;

    // Visibility
    visibility.textContent = `${visibilityValue} km`;


    // Updating icons
    weatherIcon.src = icons[weatherData.currentConditions.icon];
    
    // Feels like icon logic
    let feelsLikeTemp = Math.round(weatherData.currentConditions.feelslike);
    if (feelsLikeTemp <= 10){
        feelsLikeIcon.src = icons["thermometer-colder"];
    }else if (feelsLikeTemp > 10 && feelsLikeTemp <=15){
        feelsLikeIcon.src = icons["thermometer"];
    }else {
        feelsLikeIcon.src = icons["thermometer-warmer"];
    }

    // Wind speed icon logic
    // Converting the wind speed to Beaufort scale and updating the icon accordingly
    

    if (windSpeedValue <=1){
        windSpeedIcon.src = icons["wind-beaufort-0"];
    }else if(windSpeedValue <= 5){
        windSpeedIcon.src = icons["wind-beaufort-1"];
    }else if(windSpeedValue <=11){
        windSpeedIcon.src = icons["wind-beaufort-2"];
    }else if(windSpeedValue <=19){
        windSpeedIcon.src = icons["wind-beaufort-3"];
    }else if(windSpeedValue <=28){
        windSpeedIcon.src = icons["wind-beaufort-4"];
    }else if(windSpeedValue <=38){
        windSpeedIcon.src = icons["wind-beaufort-5"];
    }else if(windSpeedValue <=49){
        windSpeedIcon.src = icons["wind-beaufort-6"];
    }else if(windSpeedValue <=61){
        windSpeedIcon.src = icons["wind-beaufort-7"];
    }else if(windSpeedValue <=74){
        windSpeedIcon.src = icons["wind-beaufort-8"];
    }else if(windSpeedValue <=88){
        windSpeedIcon.src = icons["wind-beaufort-9"];
    }else if(windSpeedValue <=102){
        windSpeedIcon.src = icons["wind-beaufort-10"];
    }else if(windSpeedValue <=117){
        windSpeedIcon.src = icons["wind-beaufort-11"];
    }else if(windSpeedValue >=118){
        windSpeedIcon.src = icons["wind-beaufort-12"];
    }

    // UV index 
    
    uvIndexIcon.src = icons[`uv-index-${uvIndexValue}`];
    
    // Pressure icon logic
    if (pressureValue < 1000){
        pressureIcon.src = icons["pressure-low"];
    }else{
        pressureIcon.src = icons["pressure-high"];
    };
    
    // Visibility icon logic

    if (visibilityValue <= 1){
        visibilityIcon.src = icons["fog"];
    }else if(visibilityValue <=5){
        visibilityIcon.src = icons["mist"];
    }else if (visibilityValue <=10){
        visibilityIcon.src = icons["partly-cloudy-day"];
    }else {
        visibilityIcon.src = icons["clear-day"];
    }

}

