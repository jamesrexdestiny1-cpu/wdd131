
// ======================================================
// PRODUCT REVIEW CONFIRMATION PAGE
// ======================================================

// Read the submitted form information from the URL.
// The form uses GET, so its values appear in the URL.
const urlParams = new URLSearchParams(window.location.search);

// Retrieve the product ID selected by the user.
const productId = urlParams.get("product");

// Retrieve the overall rating selected by the user.
const rating = urlParams.get("rating");

// Retrieve the product installation date.
const installDate = urlParams.get("installDate");

// ======================================================
// CHECK WHETHER A VALID FORM SUBMISSION OCCURRED
// ======================================================

// Confirm that all three required fields were submitted.
const validSubmission =
    productId !== null &&
    productId.trim() !== "" &&
    rating !== null &&
    ["1", "2", "3", "4", "5"].includes(rating) &&
    installDate !== null &&
    !Number.isNaN(Date.parse(installDate));

// Get the HTML element that displays the confirmation message.
const confirmationMessage =
    document.querySelector("#confirmationMessage");

// Get the HTML element that displays the review counter.
const reviewCountDisplay =
    document.querySelector("#reviewCount");

// ======================================================
// RETRIEVE THE EXISTING REVIEW COUNTER
// ======================================================

// Read the saved review count from localStorage.
// If no previous count exists, start with zero.
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

// ======================================================
// UPDATE THE REVIEW COUNTER
// ======================================================

// Only increase the counter when the required form
// information is present and valid.
if (validSubmission) {

    // Increase the existing review count by one.
    reviewCount++;

    // Save the updated review count in localStorage.
    localStorage.setItem("reviewCount", reviewCount);

    // Display a successful submission message.
    confirmationMessage.textContent =
        "Your product review has been successfully submitted. Thank you for your feedback!";

} else {

    // Do not increase the counter when someone visits
    // the confirmation page without a valid submission.
    confirmationMessage.textContent =
        "No valid product review submission was detected. Please complete the review form first.";
}

// ======================================================
// DISPLAY THE TOTAL NUMBER OF REVIEWS
// ======================================================

// Show the current review count on the confirmation page.
reviewCountDisplay.textContent = reviewCount;

// ======================================================
// COMMON ASSIGNMENT FOOTER
// ======================================================

// Retrieve the current year from the user's device.
const currentYear = new Date().getFullYear();

// Find the footer element reserved for the current year.
document.querySelector("#currentyear").textContent = currentYear;

// Retrieve the date and time the document was last modified.
const lastModifiedDate = new Date(document.lastModified);

// Display the last modification information in the footer.
document.querySelector("#lastModified").textContent =
    `Last Modification: ${lastModifiedDate.toLocaleString()}`;
