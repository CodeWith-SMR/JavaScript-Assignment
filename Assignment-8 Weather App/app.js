// Define constants using const keyword
const apiKey = "75ddfa8d52dd9857767e2533345f7826";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Correct variable name from "cearchBox" to "searchBox"
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Use async arrow function
const checkWeather = async (city) => {
    try {
        const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            return; // Add return statement to exit function
        }

        const data = await response.json();

        // Capitalize the city name
        document.querySelector(".city").innerHTML = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        // Use Math.round instead of math.round
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // Correct spelling of "data" and use === to compare strings
        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "./images/clouds.png";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "./images/clear.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "./images/rain.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "./images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "./images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    } catch (error) {
        console.error('Error:', error);
    }
};

// Add event listener to the search button
searchBtn.addEventListener("click", () => {
    const inputValue = searchBox.value.trim(); // Get input value and remove leading/trailing spaces
    if (inputValue === "") { // If input is empty
        document.querySelector(".error").innerHTML = "Please enter a city name."; // Show error message
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"; // Hide weather info
    } else { // If input is not empty
        checkWeather(inputValue); // Call checkWeather function
        document.querySelector(".error").style.display = "none"; // Hide error message
    }
});

