import { getWeatherData, getLocationData, loadData } from "./loadData";

// Function that uses the weather data and retunrs it as an object literal so that it can be used in other modules
export async function currentWeatherData() {
    await loadData(); // Ensure data is loaded
    const weather = await getWeatherData();    // This is now the actual weather object
    const location = await getLocationData();  // This is now the actual location object
    
    // Return processed data 
    return {
        weather
    };
}