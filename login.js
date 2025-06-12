document.addEventListener("DOMContentLoaded", function () {
    // Continue button event
    let continueButton = document.querySelector(".button");
    if (continueButton) {
        continueButton.addEventListener("click", function () {
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();

            // Name validation: only letters and spaces, min 2 characters
            let nameRegex = /^[A-Za-z\s]{2,}$/;
            // Email validation regex
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!nameRegex.test(name)) {
                alert("Please enter a valid name (only letters and spaces, at least 2 characters).");
                return;
            }

            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            console.log("Redirecting to home...");
            window.location.href = "home.html";
        });
    } else {
        console.error("Error: Continue button not found.");
    }

    // Google button event
    let googleButton = document.querySelector(".google-btn");
    if (googleButton) {
        googleButton.addEventListener("click", function () {
            console.log("Redirecting via Google...");
            window.location.href = "home.html";
        });
    } else {
        console.error("Error: Google button not found.");
    }

    // Admin link event
    let adminLink = document.getElementById("adminLink");
    if (adminLink) {
        adminLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevents default link behavior

            let adminCode = prompt("Enter Admin Code:");
            let correctCode = "1234"; // Replace this with your actual admin code

            if (adminCode === correctCode) {
                alert("Access Granted! Redirecting...");
                window.location.href = "admin.html";
            } else {
                alert("Incorrect Code. Access Denied!");
            }
        });
    } else {
        console.error("Error: Admin link not found.");
    }
});
document.addEventListener("DOMContentLoaded", function () {
  const googleBtn = document.querySelector(".google-btn");

  googleBtn.addEventListener("click", function (e) {
    e.preventDefault();
    prompt("Please enter your Gmail address");
  });
});

