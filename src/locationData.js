import { fetchLocationData } from "./locationFetch";

let locationData; //Shared Variable to store location data

// Promise to fetch and store location data
export const locationDataPromise = fetchLocationData().then(data => {
    locationData = data;
    console.log("Location data ready in locationData.js");
});

export function getLocationData() {
    if (!locationData) {
        throw new Error("Location data is not yet available. Please wait for the promise to resolve.");
    }
    return locationData;
};