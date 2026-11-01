
// =============================================
// 1. GET THE CURRENT YEAR
// =============================================

// Create a Date object representing the current date and time.
const currentDate = new Date();

// Extract the current year from the Date object.
const currentYear = currentDate.getFullYear();

// Find the span in the footer and insert the current year.
document.getElementById("currentyear").textContent = currentYear;


// =============================================
// 2. DISPLAY THE LAST MODIFIED DATE
// =============================================

// Get the date and time the browser reports for this document.
// The value returned by document.lastModified is already a string.
const lastModifiedDate = document.lastModified;

// Find the footer paragraph with the ID "lastModified".
// Insert the modification date as plain text.
document.getElementById("lastModified").textContent =
    `Last Modification: ${lastModifiedDate}`;
