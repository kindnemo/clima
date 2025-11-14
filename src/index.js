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
