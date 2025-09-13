// Visual Crossing Weather API configuration

const API_KEY = "";
const WEATHER_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"; 

export async function fetchWeatherData(location) {
    try {
        const fullUrl = `${WEATHER_URL}${location}?key=${API_KEY}`;

        // Fetch weather data from the API
        const response = await fetch(fullUrl);

        // Check if the response is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Converting the response to JSON
        const weatherData = await response.json();

        return weatherData;

    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
}