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
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("adminLink").addEventListener("click", function (event) {
        event.preventDefault(); // Prevents default link behavior

        let adminCode = prompt("Enter Admin Code:");
        let correctCode = "1234"; // Replace this with your actual admin code

        if (adminCode === correctCode) {
            alert("Access Granted! Redirecting...");
            window.location.href = "admin.html"; // Redirect to admin dashboard
        } else {
            alert("Incorrect Code. Access Denied!");
        }
    });
});