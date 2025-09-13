import { fetchLocationData } from "./locationFetch";
import { fetchWeatherData } from "./weatherFetch";


let weatherData = null;
let locationData = null;
let dataLoaded = false;

// Load the data
export async function loadData() {
    try {
        locationData = await fetchLocationData();
        await new Promise(resolve => setTimeout(resolve, 100));
        weatherData = await fetchWeatherData(locationData.city);
        dataLoaded = true;
        console.log("Data loaded and ready for export");
    } catch (error) {
        console.error("Error loading data:", error);
    }
}

// Export function to get data
export async function getWeatherData() {
    if (!dataLoaded) {
        await loadData(); // Load if not already loaded
    }
    return weatherData;
}

export async function getLocationData() {
    if (!dataLoaded) {
        await loadData();
    }
    return locationData;
}

// Start loading immediately when module is imported
loadData();