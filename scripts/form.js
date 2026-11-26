
/* ==============================================
   W05 PRODUCT REVIEW FORM
   Author: James Rex Ovie
   Course: WDD 131
   File: scripts/form.js

   Purpose:
   This JavaScript file dynamically populates
   the Product Name dropdown using the supplied
   array of product objects.
============================================== */


/* ==============================================
   1. PRODUCT DATA ARRAY
============================================== */

// Creates an array containing the five products supplied in the assignment.
const products = [

    // First product object.
    {
        id: "fc-1888",             // Unique identifier used as the option value.
        name: "flux capacitor",    // Product name displayed to the visitor.
        averagerating: 4.5         // Average product rating.
    },

    // Second product object.
    {
        id: "fc-2050",             // Unique identifier used as the option value.
        name: "power laces",       // Product name displayed to the visitor.
        averagerating: 4.7         // Average product rating.
    },

    // Third product object.
    {
        id: "fs-1987",             // Unique identifier used as the option value.
        name: "time circuits",     // Product name displayed to the visitor.
        averagerating: 3.5         // Average product rating.
    },

    // Fourth product object.
    {
        id: "ac-2000",             // Unique identifier used as the option value.
        name: "low voltage reactor", // Product name displayed to the visitor.
        averagerating: 3.9         // Average product rating.
    },

    // Fifth product object.
    {
        id: "jj-1969",             // Unique identifier used as the option value.
        name: "warp equalizer",    // Product name displayed to the visitor.
        averagerating: 5.0         // Average product rating.
    }

];


/* ==============================================
   2. SELECT THE PRODUCT DROPDOWN
============================================== */

// Finds the select element whose id is "product" in form.html.
const productSelect = document.querySelector("#product");


/* ==============================================
   3. GENERATE PRODUCT OPTIONS DYNAMICALLY
============================================== */

// Checks whether the Product Name dropdown exists before adding options.
if (productSelect) {

    // Loops through every product object in the products array.
    products.forEach((product) => {

        // Creates a new HTML option element for the current product.
        const option = document.createElement("option");

        // Uses the product's unique id as the option's submitted value.
        option.value = product.id;

        // Uses the product's name as the text displayed in the dropdown.
        option.textContent = product.name;

        // Adds the newly created option to the Product Name dropdown.
        productSelect.appendChild(option);

    });

}
