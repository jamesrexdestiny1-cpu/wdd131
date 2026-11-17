
/* =========================================
   1. TEMPLE DATA ARRAY
   ========================================= */

// Seven original temple objects supplied by the assignment,
// followed by three additional temples.

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Additional temple 1.
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl:
        "https://commons.wikimedia.org/wiki/Special:FilePath/10172022SaltLakeUtahTemple-01.jpg"
    },

    // Additional temple 2.
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl:
        "https://assets.churchofjesuschrist.org/ef/81/ef81bddf33d44fa07ea2d57a86cee8bc3a5081e9/accra_ghana_temple_lds.jpeg"
    },

    // Additional temple 3.
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-3544-main.jpg"
    }
];


/* =========================================
   2. SELECT HTML ELEMENTS
   ========================================= */

// Select the hamburger menu elements.
const menuButton = document.querySelector("#menu-button");
const menuIcon = document.querySelector("#menu-icon");
const navigation = document.querySelector("#navigation");

// Select all navigation filter links.
const navLinks = document.querySelectorAll(".nav-link");

// Select the gallery and heading information.
const templeGallery = document.querySelector("#temple-gallery");
const pageHeading = document.querySelector("main h1");
const templeCount = document.querySelector("#temple-count");


/* =========================================
   3. GET THE DEDICATION YEAR
   ========================================= */

// The assignment provides dedication dates rather than
// separate construction dates. We use the dedication year
// to classify the temples for the Old and New filters.

function getDedicationYear(temple) {
    return Number(temple.dedicated.split(",")[0]);
}


/* =========================================
   4. GENERATE TEMPLE CARDS
   ========================================= */

function displayTemples(templeList) {

    // Clear the previous cards before displaying new ones.
    templeGallery.innerHTML = "";

    // Update the number of temples currently displayed.
    templeCount.textContent =
        `${templeList.length} temple(s) displayed`;

    // Display a message if a filter has no matching temples.
    if (templeList.length === 0) {
        templeCount.textContent = "No temples found for this filter.";
        return;
    }

    // Loop through every temple in the selected array.
    templeList.forEach((temple) => {

        // Create a new article for the temple.
        const card = document.createElement("article");
        card.classList.add("temple-card");

        // Create the temple name.
        const name = document.createElement("h2");
        name.textContent = temple.templeName;

        // Create the location information.
        const location = document.createElement("p");
        location.innerHTML =
            `<span class="label">Location:</span> ${temple.location}`;

        // Create the dedication date information.
        const dedication = document.createElement("p");
        dedication.innerHTML =
            `<span class="label">Dedicated:</span> ${temple.dedicated}`;

        // Format the building area with thousands separators.
        const area = document.createElement("p");
        area.innerHTML =
            `<span class="label">Size:</span> ${temple.area.toLocaleString("en-US")} sq ft`;

        // Create the temple image.
        const image = document.createElement("img");
        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} exterior`;
        image.width = 400;
        image.height = 250;

        // Apply native browser lazy loading.
        image.loading = "lazy";

        // Add the information and image to the card.
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(image);

        // Add the completed card to the gallery.
        templeGallery.appendChild(card);
    });
}


/* =========================================
   5. FILTER THE TEMPLE ARRAY
   ========================================= */

function filterTemples(filter) {

    let filteredTemples = [];

    // Home displays every temple.
    if (filter === "all") {
        filteredTemples = temples;
    }

    // Old displays temples dedicated before 1900.
    else if (filter === "old") {
        filteredTemples = temples.filter((temple) =>
            getDedicationYear(temple) < 1900
        );
    }

    // New displays temples dedicated after 2000.
    else if (filter === "new") {
        filteredTemples = temples.filter((temple) =>
            getDedicationYear(temple) > 2000
        );
    }

    // Large displays temples greater than 90,000 sq ft.
    else if (filter === "large") {
        filteredTemples = temples.filter((temple) =>
            temple.area > 90000
        );
    }

    // Small displays temples smaller than 10,000 sq ft.
    else if (filter === "small") {
        filteredTemples = temples.filter((temple) =>
            temple.area < 10000
        );
    }

    // Render the selected temples.
    displayTemples(filteredTemples);
}


/* =========================================
   6. NAVIGATION FILTER EVENTS
   ========================================= */

// Listen for clicks on the navigation links.
navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        // Prevent the page from jumping to the top.
        event.preventDefault();

        // Get the selected filter.
        const selectedFilter = link.dataset.filter;

        // Update the page heading.
        pageHeading.textContent = link.textContent;

        // Apply the selected filter.
        filterTemples(selectedFilter);

        // Remove the active class from all links.
        navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });

        // Highlight the selected link.
        link.classList.add("active");

        // Close the mobile menu after selecting a filter.
        navigation.classList.remove("open");

        menuIcon.textContent = "☰";

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    });
});


/* =========================================
   7. MOBILE HAMBURGER MENU
   ========================================= */

menuButton.addEventListener("click", () => {

    // Open or close the navigation menu.
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    // Change the menu icon.
    menuIcon.textContent = isOpen ? "✕" : "☰";

    // Update accessibility attributes.
    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});


/* =========================================
   8. CLOSE MENU USING ESCAPE KEY
   ========================================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        navigation.classList.contains("open")
    ) {

        navigation.classList.remove("open");

        menuIcon.textContent = "☰";

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );
    }
});


/* =========================================
   9. DYNAMIC FOOTER INFORMATION
   ========================================= */

// Display the current year.
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// Display the document's last modified date.
document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;


/* =========================================
   10. INITIAL PAGE DISPLAY
   ========================================= */

// Display all ten temples when the page first loads.
displayTemples(temples);
