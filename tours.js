document.addEventListener("DOMContentLoaded", function () {
    const dayTourBtn = document.getElementById("day-tour-btn");
    const personalisedExcursionsBtn = document.getElementById("personalised-excursions-btn");
    const tourList = document.getElementById("tour-list");
    const excursionPricing = document.getElementById("excursion-pricing");

    // Function to show Day Tour section and hide Personalised Excursions
    dayTourBtn.addEventListener("click", function () {
        tourList.style.display = "block";
        excursionPricing.style.display = "none";
    });

    // Function to show Personalised Excursions section and hide Day Tour
    personalisedExcursionsBtn.addEventListener("click", function () {
        excursionPricing.style.display = "block";
        tourList.style.display = "none";
    });
});

