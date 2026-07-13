
    const updateButton = document.getElementById("updateButton");
    const headline = document.getElementById("headlineInput");
    const ctaHeadline = document.getElementById("ctaHeadline");

    updateButton.addEventListener("click", function() {
        const newHeadline = headlineInput.value.trim();

        if (newHeadline !== "") {
            ctaHeadlie.textContent = newHeadline;
            headlineInput.value = "";
        }
    });
