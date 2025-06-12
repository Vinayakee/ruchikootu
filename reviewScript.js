window.onload = () => {
  loadReviews();
};

document.getElementById("reviewForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const review = document.getElementById("review").value;

  alert("Review added successfully!");

  const newReview = { name, subject, review };
  saveReview(newReview);
  displayReview(newReview);

  document.getElementById("thankYouMessage").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("thankYouMessage").classList.add("hidden");
  }, 3000);

  this.reset();
});

document.getElementById("suggestionForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Suggestion submitted. Thanks!");

  document.getElementById("suggMessage").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("suggMessage").classList.add("hidden");
  }, 3000);
  this.reset();
});

function saveReview(review) {
  const reviews = JSON.parse(localStorage.getItem("userReviews") || "[]");
  reviews.unshift(review);
  localStorage.setItem("userReviews", JSON.stringify(reviews));
}

function displayReview({ name, subject, review }) {
  const reviewList = document.getElementById("reviewsList");
  const reviewDiv = document.createElement("div");
  reviewDiv.className = "review-item";
  reviewDiv.innerHTML = `<strong>${name}</strong> (${subject}):<br>${review}`;
  reviewList.prepend(reviewDiv);
}

function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem("userReviews") || "[]");
  reviews.forEach(displayReview);
}
// 🌟 Highlighted Review Carousel Logic
const highlightedData = [
  {
    img: "user1.jpg",
    text: `"The bun porotta dish was perfect, it is one of my master dishes🥰. "<br><strong>- Meera, Food Blogger</strong>`
  },
  {
    img: "user2.jpg",
    text: `"Enikk ente veedu miss cheyumbozhellaam njan oro recipes try cheyyum ee website il ninnu😅. Awesome work guys."<br><strong>- Amrutha, Bangalore</strong>`
  },
  {
    img: "user3.jpg",
    text: `"The best online recipe app for Keralite flavors!"<br><strong>- Neha, Mumbai</strong>`
  }
];

let currentReview = 0;
const imgElem = document.getElementById("highlightImg");
const textElem = document.getElementById("highlightText");

function updateHighlight() {
  const { img, text } = highlightedData[currentReview];
  imgElem.style.opacity = 0;
  textElem.style.opacity = 0;

  setTimeout(() => {
    imgElem.src = img;
    textElem.innerHTML = text;

    imgElem.style.opacity = 1;
    textElem.style.opacity = 1;
  }, 500);

  currentReview = (currentReview + 1) % highlightedData.length;
}

setInterval(updateHighlight, 5000);
