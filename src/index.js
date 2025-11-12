import "./styles.css";
import { fetchLocationData } from "./locationFetch";
import { fetchWeatherData } from "./weatherFetch";
import { updateData } from "./updateWeatherData";

const searchButton = document.getElementById("search");
console.log(searchButton);

updateData();

searchButton.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        // updateData(searchButton.value.trim());
        updateData(searchButton.value.trim());
        searchButton.value = "";
    }
});

// fetchLocationData().then(data => {
//     locationData = data;
//     console.log(locationData);
// });                               


// import { getLocationData, getWeatherData } from "./loadData";


// fetchLocationData()
//     .then(location => {
//         console.log("Location data:", location);

//         setTimeout(() => {
//             fetchWeatherData(location.city)
//                 .then(weather => {
//                     weatherObj = weather;
//                 });

//         }, 1000);

//     });

// console.log(weatherObj);