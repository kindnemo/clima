import "./styles.css";
import { fetchLocationData } from "./locationFetch";
import { fetchWeatherData } from "./weatherFetch";
import { updateData } from "./updateWeatherData";

updateData();


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