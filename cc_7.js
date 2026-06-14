
    const updateButton = document.getElementById("updateButton");
    const headline = document.getElementById("headlineInput");
    const ctaHeadline = document.getElementById("ctaHeadline");

    updateButton.addEventListener("click", function() {
        ctaHeadline.textContent = headline.value;
    });
