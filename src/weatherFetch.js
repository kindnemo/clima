import { fetchLocationData } from "./locationFetch";
import { locationDataPromise, getLocationData } from "./locationData";

// Fetching location data to be used in weatherFetch.js
export async function ensureLocationData() {
    await locationDataPromise;
    const location =  getLocationData();
    return location;
}



const weatherAPIKey = "BZDVQEHYGZ2N3SH3FX8BUNAAY";
const weatherBaseURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export async function fetchWeatherData() {

    const location = await ensureLocationData();
    const city = location.city;
    try {
        const response = await fetch(`${weatherBaseURL}${city}?unitGroup=metric&key=${weatherAPIKey}&contentType=json`);

        if (!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const weatherData = await response.json();
        
        if(weatherData.errorCode){
            throw new Error(`API error! code: ${weatherData.errorCode}, message: ${weatherData.message}`);
        }
        
        console.log("Weather data ready");
        console.log(weatherData);
        return weatherData;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}