document.addEventListener("DOMContentLoaded", function () {
    let continueButton = document.querySelector(".button");
    let googleButton = document.querySelector(".google-btn");

    if (continueButton) {
        continueButton.addEventListener("click", function () {
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();

            if (name !== "" && email !== "") {
                console.log("Redirecting to home...");
                window.location.href = "home.html";
            } else {
                alert("Please enter both your name and email before continuing.");
            }
        });
    } else {
        console.error("Error: Continue button not found.");
    }

    if (googleButton) {
        googleButton.addEventListener("click", function () {
            console.log("Redirecting via Google...");
            window.location.href = "home.html";
        });
    } else {
        console.error("Error: Google button not found.");
    }
});