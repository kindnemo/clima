const apiKey = "3f196642d656413bbcbc4bbebd35f738";

export async function fetchLocationData() {
    try {
        const response = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if(data.error && data.error.code){
            throw new Error(`API error! code: ${data.error.code}, info: ${data.error.info}`);
        }
        console.log("Location data ready");
        return data;
    } catch (error) {
        console.error("Error fetching location data:", error);
        throw error;
    }
}


