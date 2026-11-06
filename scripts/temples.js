
/* =========================================
   1. SELECT HTML ELEMENTS
   ========================================= */

// Select the hamburger button.
const menuButton = document.querySelector("#menu-button");

// Select the hamburger icon inside the button.
const menuIcon = document.querySelector("#menu-icon");

// Select the navigation menu.
const navigation = document.querySelector("#navigation");

// Select all navigation links.
const navLinks = document.querySelectorAll(".nav-link");

// Select all temple figures in the gallery.
const templeCards = document.querySelectorAll(".temple-card");

// Select the main heading.
const pageHeading = document.querySelector("main h1");


// =========================================
// 2. RESPONSIVE HAMBURGER MENU
// =========================================

// Listen for a click on the hamburger button.
menuButton.addEventListener("click", () => {

    // Toggle the open class on the navigation menu.
    navigation.classList.toggle("open");

    // Check whether the menu is currently open.
    const isOpen = navigation.classList.contains("open");

    // Change the hamburger icon into an X when open.
    menuIcon.textContent = isOpen ? "✕" : "☰";

    // Update the button's accessibility information.
    menuButton.setAttribute("aria-expanded", isOpen);

    // Update the button's accessible label.
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});


// =========================================
// 3. TEMPLE GALLERY FILTERING
// =========================================

// Listen for clicks on each navigation link.
navLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        // Prevent the link from jumping to the top of the page.
        event.preventDefault();

        // Get the selected category from the link.
        const selectedFilter = link.dataset.filter;

        // Update the heading based on the selected category.
        pageHeading.textContent = link.textContent;

        // Check every temple figure in the gallery.
        templeCards.forEach((card) => {

            // Get the categories assigned to the current figure.
            const categories = card.dataset.category.split(" ");

            // Show every temple for Home.
            // Otherwise, show only matching categories.
            const shouldDisplay =
                selectedFilter === "all" ||
                categories.includes(selectedFilter);

            // Hide or show the current figure.
            card.classList.toggle("hidden", !shouldDisplay);
        });

        // Remove the active class from all navigation links.
        navLinks.forEach((navLink) => {
            navLink.classList.remove("active");
        });

        // Highlight the selected navigation link.
        link.classList.add("active");

        // Close the mobile menu after a selection.
        navigation.classList.remove("open");

        // Restore the hamburger icon.
        menuIcon.textContent = "☰";

        // Update the menu button accessibility attributes.
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    });
});


// =========================================
// 4. CLOSE MENU WITH ESCAPE KEY
// =========================================

// Listen for keyboard input.
document.addEventListener("keydown", (event) => {

    // Close the navigation when Escape is pressed.
    if (event.key === "Escape") {

        navigation.classList.remove("open");

        menuIcon.textContent = "☰";

        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
    }
});


// =========================================
// 5. DYNAMIC COPYRIGHT YEAR
// =========================================

// Create a Date object representing today's date.
const currentDate = new Date();

// Get the current year.
const currentYear = currentDate.getFullYear();

// Insert the year into the footer.
document.querySelector("#currentyear").textContent = currentYear;


// =========================================
// 6. LAST MODIFIED DATE
// =========================================

// Get the last modification date reported by the browser.
const lastModifiedDate = document.lastModified;

// Display the modification date in the footer.
document.querySelector("#lastModified").textContent =
    `Last Modification: ${lastModifiedDate}`;
