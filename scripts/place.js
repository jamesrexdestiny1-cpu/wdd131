
/* =========================================================
   1. STATIC WEATHER VARIABLES
   These values represent the temperature and wind speed
   displayed in the HTML weather section.

   Temperature uses Celsius.
   Wind speed uses kilometres per hour.
   ========================================================= */

const temperature = 29;
const windSpeed = 12;


/* =========================================================
   2. WIND CHILL CALCULATION FUNCTION
   This function calculates wind chill using the Celsius
   formula when valid temperature and wind speed values
   are supplied.

   Temperature: Celsius (°C)
   Wind speed: Kilometres per hour (km/h)
   ========================================================= */

function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}


/* =========================================================
   3. SELECT HTML ELEMENTS
   Use querySelector() to locate the elements that JavaScript
   will update on the webpage.
   ========================================================= */

const temperatureElement = document.querySelector("#temperature");
const windSpeedElement = document.querySelector("#wind-speed");
const windChillElement = document.querySelector("#wind-chill");


/* =========================================================
   4. DISPLAY THE STATIC WEATHER VALUES
   Insert the temperature and wind speed into their respective
   HTML elements.
   ========================================================= */

temperatureElement.textContent = temperature;
windSpeedElement.textContent = windSpeed;


/* =========================================================
   5. CHECK WIND CHILL CONDITIONS
   A wind chill calculation is only valid when BOTH conditions
   below are satisfied:

   - Temperature must be 10°C or lower.
   - Wind speed must be greater than 4.8 km/h.

   If the conditions are satisfied, calculate the wind chill.
   Otherwise, display "N/A".
   ========================================================= */

if (temperature <= 10 && windSpeed > 4.8) {

    // Call the calculation function only when conditions are valid.
    const windChill = calculateWindChill(temperature, windSpeed);

    // Display the calculated result to one decimal place.
    windChillElement.textContent = `${windChill.toFixed(1)} °C`;

} else {

    // Display N/A when the wind chill conditions are not met.
    windChillElement.textContent = "N/A";
}


/* =========================================================
   6. DISPLAY THE CURRENT YEAR
   Automatically retrieve the current year from the browser
   and insert it into the footer.
   ========================================================= */

document.querySelector("#current-year").textContent =
    new Date().getFullYear();


/* =========================================================
   7. DISPLAY THE LAST MODIFIED DATE
   document.lastModified retrieves the date and time when
   the HTML document was last modified.
   ========================================================= */

document.querySelector("#last-modified").textContent =
    document.lastModified;
