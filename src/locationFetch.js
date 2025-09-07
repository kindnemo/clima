export async function fetchLocationData() {

const url = "https://api.ipapi.com/check?access_key=";

const options = {
    method: 'GET',
};

try {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();

    if (result.error) {
        throw new Error(`API error! code: ${result.error.code}, info: ${result.error.info}`);
    }


    console.log(result);
    return result;
} catch (error) {
    console.error('Error fetching location data:', error);
    throw error;
}
}

