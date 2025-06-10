const defaultQuestions = {
  snacks: [
  // Existing questions...
  {
    question: "What is a famous Kerala snack made from rice dough and jaggery filling?",
    options: ["Kozhukatta", "Idiyappam", "Nei Payasam", "Ada Pradhaman"],
    answer: 0,
    explanation: "Kozhukatta is a steamed dumpling made with rice flour and a jaggery-coconut filling."
  },
  {
    question: "Which crispy snack is made by deep-frying spiced banana slices?",
    options: ["Banana Chips", "Murukku", "Mixture", "Achappam"],
    answer: 0,
    explanation: "Kerala Banana Chips are a popular tea-time snack made with raw banana and coconut oil."
  },
  {
    question: "What is the main ingredient in 'Achappam'?",
    options: ["Rice flour", "Wheat flour", "Besan", "Rava"],
    answer: 0,
    explanation: "Achappam is a rose-shaped crispy snack made from rice flour batter."
  },
  {
    question: "Which snack is shaped like a flower and deep-fried?",
    options: ["Achappam", "Unniyappam", "Pazham Pori", "Vada"],
    answer: 0,
    explanation: "Achappam has a beautiful flower shape achieved using a special iron mold."
  },
  {
    question: "Which of the following is a Kerala rice snack made with jaggery and flattened rice?",
    options: ["Aval Vilayichathu", "Appam", "Kinnathappam", "Puttu"],
    answer: 0,
    explanation: "Aval Vilayichathu is made by roasting flattened rice with jaggery and coconut."
  },
  {
    question: "What is a deep-fried snack shaped like spirals and popular during festivals?",
    options: ["Murukku", "Kozhukatta", "Achappam", "Neyyappam"],
    answer: 0,
    explanation: "Murukku is a crunchy snack made from rice flour and urad dal flour."
  },
  {
    question: "Which Kerala snack is made by steaming rice noodles?",
    options: ["Idiyappam", "Appam", "Vattayappam", "Puttu"],
    answer: 0,
    explanation: "Idiyappam is made by pressing rice dough into noodles and steaming them."
  },
  {
    question: "Which sweet snack is made using jaggery and ghee-fried rice flour batter?",
    options: ["Neyyappam", "Achappam", "Unniyappam", "Ada"],
    answer: 0,
    explanation: "Neyyappam is a deep-fried snack made with jaggery, ghee, and rice flour."
  },
  {
    question: "What is the traditional mold used for making Achappam called?",
    options: ["Achu", "Tava", "Paniyaram pan", "Murukku press"],
    answer: 0,
    explanation: "Achu is the flower-shaped iron mold used to make Achappam."
  },
  {
    question: "Which snack uses a fermented batter of rice and coconut?",
    options: ["Vattayappam", "Unniyappam", "Idiyappam", "Kozhukatta"],
    answer: 0,
    explanation: "Vattayappam is a soft, steamed rice cake made from fermented batter."
  },
  {
    question: "Which snack is commonly served with tea in Kerala?",
    options: ["Pazham Pori", "Appam", "Idli", "Upma"],
    answer: 0,
    explanation: "Pazham Pori is a classic tea-time snack in Kerala."
  },
  {
    question: "What is a savory Kerala snack made of rice flour and cumin?",
    options: ["Sukhiyan", "Chakka Chips", "Avalose Podi", "Uzhunnu Vada"],
    answer: 2,
    explanation: "Avalose Podi is a dry snack made from roasted rice flour and coconut."
  },
  {
    question: "Which snack is made from green gram and jaggery?",
    options: ["Sukhiyan", "Neyyappam", "Kozhukatta", "Ada"],
    answer: 0,
    explanation: "Sukhiyan is a fried snack filled with sweetened green gram mixture."
  },
  {
    question: "Which fruit is used in 'Chakka Chips'?",
    options: ["Jackfruit", "Banana", "Mango", "Papaya"],
    answer: 0,
    explanation: "Chakka Chips are made from ripe jackfruit slices deep-fried in coconut oil."
  },
  {
    question: "Which snack is steamed and made with coconut and jaggery wrapped in a leaf?",
    options: ["Ela Ada", "Puttu", "Idiyappam", "Kinnathappam"],
    answer: 0,
    explanation: "Ela Ada is made by steaming rice dough filled with jaggery in banana leaves."
  }
],
  main: [
  // Existing questions...
  {
    question: "Which Kerala dish is steamed in a cylindrical mold?",
    options: ["Puttu", "Appam", "Dosa", "Pathiri"],
    answer: 0,
    explanation: "Puttu is steamed in a cylindrical container and often served with banana or curry."
  },
  {
    question: "What is Kerala 'Sadya' traditionally served on?",
    options: ["Banana leaf", "Steel plate", "Clay plate", "Wooden tray"],
    answer: 0,
    explanation: "Sadya is a feast served on a banana leaf, especially during festivals like Onam."
  },
  {
    question: "What is the main carbohydrate in Sadya?",
    options: ["Rice", "Wheat", "Ragi", "Millets"],
    answer: 0,
    explanation: "Kerala Sadya is centered around red matta rice."
  },
  {
    question: "Which main dish is a flatbread made from refined flour?",
    options: ["Kerala Parotta", "Appam", "Chapati", "Pathiri"],
    answer: 0,
    explanation: "Kerala Parotta is made from refined flour and has flaky layers."
  },
  {
    question: "Which rice variety is commonly used in Kerala meals?",
    options: ["Matta rice", "Basmati rice", "Sona Masoori", "Jeerakasala"],
    answer: 0,
    explanation: "Matta rice is a red rice known for its flavor and nutrition."
  },
  {
    question: "Which Kerala main course is often served with fish curry?",
    options: ["Puttu", "Appam", "Idiyappam", "Boiled rice"],
    answer: 3,
    explanation: "Boiled rice is a staple that pairs well with spicy fish curry."
  },
  {
    question: "What is a Kerala breakfast dish made with rice flour and coconut?",
    options: ["Puttu", "Chapati", "Dosa", "Neer Dosa"],
    answer: 0,
    explanation: "Puttu is a steamed rice cake layered with coconut."
  },
  {
    question: "Which dish uses fermented rice batter and coconut milk?",
    options: ["Appam", "Idli", "Dosa", "Kichadi"],
    answer: 0,
    explanation: "Appam is a soft-centered rice pancake made with fermented batter and coconut milk."
  },
  {
    question: "Which dish is similar to Puttu but uses wheat flour?",
    options: ["Gothambu Puttu", "Ragi Puttu", "Nei Puttu", "Kadala Puttu"],
    answer: 0,
    explanation: "Gothambu Puttu is made using whole wheat flour instead of rice flour."
  },
  {
    question: "What is the side dish typically served with Puttu?",
    options: ["Kadala Curry", "Sambar", "Rasam", "Thoran"],
    answer: 0,
    explanation: "Black chickpea curry (Kadala Curry) is the most common accompaniment for Puttu."
  },
  {
    question: "Which Kerala dish is a rice flatbread?",
    options: ["Pathiri", "Idiyappam", "Appam", "Dosa"],
    answer: 0,
    explanation: "Pathiri is a soft flatbread made with rice flour, popular in Malabar."
  },
  {
    question: "Which Kerala dish includes tapioca and fish curry?",
    options: ["Kappa and Meen Curry", "Appam and Stew", "Idli and Sambar", "Kichadi"],
    answer: 0,
    explanation: "Kappa (tapioca) with fish curry is a famous Kerala combo."
  },
  {
    question: "Which vegetable is commonly used in Kerala Avial?",
    options: ["Raw banana", "Potato", "Beetroot", "Carrot"],
    answer: 0,
    explanation: "Avial is a mixed vegetable dish that includes raw banana, yam, and others."
  },
  {
    question: "Which main dish is sweet and served during Onam?",
    options: ["Chakka Pradhaman", "Ada Pradhaman", "Paal Payasam", "All of these"],
    answer: 3,
    explanation: "All are types of Payasam or sweet dishes served during Onam Sadya."
  },
  {
    question: "Which Kerala dish is a mild stew made with vegetables or meat?",
    options: ["Ishtu", "Theeyal", "Kootu Curry", "Olan"],
    answer: 0,
    explanation: "Ishtu or stew is a coconut milk-based dish served with Appam or Idiyappam."
  }
],

  curries: [
  // Existing questions...
  {
    question: "Which Kerala curry is made with roasted coconut and spices?",
    options: ["Theeyal", "Moru Curry", "Avial", "Olan"],
    answer: 0,
    explanation: "Theeyal is a dark curry made from roasted coconut and tamarind."
  },
  {
    question: "What is the key souring agent in 'Fish Mango Curry'?",
    options: ["Raw mango", "Tamarind", "Lemon", "Tomato"],
    answer: 0,
    explanation: "Raw mango adds the sourness in Kerala-style Fish Mango Curry."
  },
  {
    question: "What is a creamy white curry made from ash gourd and coconut milk?",
    options: ["Olan", "Avial", "Kootu Curry", "Sambar"],
    answer: 0,
    explanation: "Olan is a mild coconut milk curry made with ash gourd and red beans."
  },
  {
    question: "Which curry uses drumsticks and coconut paste?",
    options: ["Muringakka Curry", "Rasam", "Sambar", "Kalan"],
    answer: 0,
    explanation: "Muringakka Curry is made with drumsticks and coconut-based gravy."
  },
  {
    question: "What is a thick curd-based curry with yam or raw banana?",
    options: ["Kalan", "Pachadi", "Thoran", "Rasam"],
    answer: 0,
    explanation: "Kalan is a thick, sour curry made with curd and yam or banana."
  },
  {
    question: "Which curry includes roasted coconut, black chickpeas, and raw banana?",
    options: ["Kootu Curry", "Theeyal", "Kalan", "Olan"],
    answer: 0,
    explanation: "Kootu Curry is a dry curry with roasted coconut and legumes."
  },
  {
    question: "Which curry is served with Sadya and contains cucumber and yogurt?",
    options: ["Pachadi", "Moru Curry", "Rasam", "Sambar"],
    answer: 0,
    explanation: "Pachadi is a side dish made with curd and fruits/vegetables like cucumber."
  },
  {
    question: "What is Kerala Rasam primarily flavored with?",
    options: ["Tamarind and spices", "Yogurt", "Coconut", "Mustard"],
    answer: 0,
    explanation: "Kerala Rasam is a tangy soup made with tamarind, tomatoes, and pepper."
  },
  {
    question: "Which curry is a thick tamarind-based lentil curry?",
    options: ["Sambar", "Rasam", "Pachadi", "Kalan"],
    answer: 0,
    explanation: "Sambar is made with lentils, tamarind, and vegetables."
  },
  {
    question: "What is the primary lentil in Kerala Sambar?",
    options: ["Toor dal", "Moong dal", "Chana dal", "Urad dal"],
    answer: 0,
    explanation: "Toor dal (pigeon peas) is used in making Kerala-style Sambar."
  },
  {
    question: "Which curry uses plantain and coconut masala?",
    options: ["Kalan", "Theeyal", "Erissery", "Rasam"],
    answer: 2,
    explanation: "Erissery is made using plantains or pumpkin and a coconut paste."
  },
  {
    question: "Which curry is a sweet and sour pineapple dish in Sadya?",
    options: ["Pineapple Pachadi", "Pineapple Rasam", "Pineapple Avial", "Pineapple Kootu"],
    answer: 0,
    explanation: "Pineapple Pachadi is a fruit-based curd dish with sweet and tangy flavors."
  },
  {
    question: "Which Sadya curry is made of pumpkin and red beans?",
    options: ["Erissery", "Kootu Curry", "Avial", "Olan"],
    answer: 0,
    explanation: "Erissery is a traditional dish made with pumpkin and legumes."
  },
  {
    question: "Which dish uses ash gourd, coconut milk, and cowpeas?",
    options: ["Olan", "Theeyal", "Kootu Curry", "Sambar"],
    answer: 0,
    explanation: "Olan is a subtle and mild curry made during festivals."
  },
  {
    question: "Which dish is tangy and made with yogurt and mustard seasoning?",
    options: ["Moru Curry", "Pachadi", "Rasam", "Kalan"],
    answer: 0,
    explanation: "Moru Curry is a spiced yogurt curry often served with rice."
  }
]

};
// --- BACKGROUNDS ---

 const backgrounds = {
  snacks: "snacks.jpg",
  main: "mainCourse.jpg",
  curries: "curry.jpg" // <-- fixed
};


// --- STATE ---
let currentCategory = "";
let questions = [], currentQuestionIndex = 0, score = 0, selectedAnswer = null, wrongAnswers = [];
let playerName = "";

// --- ELEMENTS ---
const loginSec    = document.getElementById("login-section");
const playerSec   = document.getElementById("player-section");
const adminSec    = document.getElementById("admin-section");
const catSelect   = document.getElementById("category-select");
const quizBox     = document.getElementById("quiz-box");
const resultBox   = document.getElementById("result-box");

const playerLoginBtn  = document.getElementById("player-login-btn");
const adminLoginBtn   = document.getElementById("admin-login-btn");
const nameInput       = document.getElementById("player-name-input");
const nameSubmit      = document.getElementById("player-name-submit");
const displayName     = document.getElementById("player-display-name");
const nameHeading     = document.getElementById("player-name-heading");
const finalName       = document.getElementById("player-name-final");

const categoryEl      = document.getElementById("category");
const startBtn        = document.getElementById("start-btn");
const questionBox     = document.getElementById("question");
const optionsList     = document.getElementById("options");
const nextBtn         = document.getElementById("next-btn");
const scoreDisplay    = document.getElementById("score");
const explanationsDiv = document.getElementById("explanations");
const playAgainBtn    = document.getElementById("play-again");

// --- ADMIN ELEMENTS ---
const adminForm       = document.getElementById("admin-form");
const adminCat        = document.getElementById("admin-category");
const adminQ          = document.getElementById("admin-question");
const adminOpts       = [
  document.getElementById("admin-opt0"),
  document.getElementById("admin-opt1"),
  document.getElementById("admin-opt2"),
  document.getElementById("admin-opt3")
];
const adminAns        = document.getElementById("admin-answer");
const adminExpl       = document.getElementById("admin-explanation");
const adminMsg        = document.getElementById("admin-message");
const adminBackBtn    = document.getElementById("admin-back-btn");

// --- NAVIGATION HANDLERS ---
playerLoginBtn.onclick = () => {
  loginSec.style.display = "none";
  playerSec.style.display = "block";
};
adminLoginBtn.onclick = () => {
  loginSec.style.display = "none";
  adminSec.style.display = "block";
};
adminBackBtn.onclick = () => {
  adminSec.style.display = "none";
  loginSec.style.display = "block";
};

// --- PLAYER NAME FLOW ---
nameInput.addEventListener("input", () => {
  nameSubmit.disabled = !nameInput.value.trim();
});
nameSubmit.onclick = () => {
  playerName = nameInput.value.trim();
  displayName.textContent = playerName;
  nameHeading.textContent = playerName;
  nameSubmit.disabled = true;
  playerSec.style.display = "none";
  catSelect.style.display = "block";
};

// --- CATEGORY & START ---
categoryEl.addEventListener("change", () => startBtn.disabled = !categoryEl.value);
startBtn.onclick = () => {
  currentCategory = categoryEl.value;
document.body.style.backgroundImage = `url(${backgrounds[currentCategory]})`;
  startQuiz();
};

// --- QUIZ FLOW ---
nextBtn.onclick = () => {
  if (selectedAnswer === null) return;
  const correctIndex = questions[currentQuestionIndex].answer;
  if (selectedAnswer === correctIndex) score++;
  else wrongAnswers.push({
    question: questions[currentQuestionIndex].question,
    userAnswer: questions[currentQuestionIndex].options[selectedAnswer],
    correctAnswer: questions[currentQuestionIndex].options[correctIndex],
    explanation: questions[currentQuestionIndex].explanation
  });

  currentQuestionIndex++;
  currentQuestionIndex < questions.length ? loadQuestion() : showResult();
};

playAgainBtn.onclick = () => window.location.reload();

function startQuiz() {
  // load stored or fallback
  let stored = localStorage.getItem(`questions_${currentCategory}`);
  let base = defaultQuestions[currentCategory] || [];
  let extra = stored ? JSON.parse(stored) : [];
  // Combine default and admin-added, then shuffle & pick 8
  questions = shuffleArray([...base, ...extra]).slice(0, 8);
  currentQuestionIndex = 0; score = 0; wrongAnswers = [];

  catSelect.style.display = "none";
  quizBox.style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  selectedAnswer = null; nextBtn.disabled = true;
  const q = questions[currentQuestionIndex];
  questionBox.textContent = `Q${currentQuestionIndex+1}. ${q.question}`;
  optionsList.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.className = "option-item";
    li.onclick = () => {
      Array.from(optionsList.children).forEach(c=>c.classList.remove("selected"));
      li.classList.add("selected");
      selectedAnswer = idx;
      nextBtn.disabled = false;
    };
    optionsList.appendChild(li);
  });
}

function showResult() {
  quizBox.style.display = "none";
  resultBox.style.display = "block";
  finalName.textContent = playerName;
  scoreDisplay.textContent = score;
  explanationsDiv.innerHTML = "<h3>Explanations for Incorrect Answers:</h3>";
  if (!wrongAnswers.length) explanationsDiv.innerHTML += "<p>Awesome! You got all correct 🎉</p>";
  else wrongAnswers.forEach(({question, userAnswer, correctAnswer, explanation}, i) => {
    explanationsDiv.innerHTML += `
      <div class="explanation-item">
        <b>Q${i+1}: ${question}</b><br/>
        Your answer: <span class="wrong-answer">${userAnswer}</span><br/>
        Correct: <span class="correct-answer">${correctAnswer}</span><br/>
        Explanation: ${explanation}
      </div><hr/>`;
  });
}

// --- ADMIN FLOW ---
adminForm.onsubmit = e => {
  e.preventDefault();
  const cat = adminCat.value;
  const newQ = {
    question: adminQ.value.trim(),
    options: adminOpts.map(i=>i.value.trim()),
    answer: parseInt(adminAns.value),
    explanation: adminExpl.value.trim()
  };
  // fetch, append, store
  const key = `questions_${cat}`;
  let list = JSON.parse(localStorage.getItem(key)) || [];
  list.push(newQ);
  localStorage.setItem(key, JSON.stringify(list));
  adminMsg.textContent = "Question added successfully!";
  adminForm.reset();
  displayAdminQuestions(); // (if you added the display function)
};

// --- UTIL ---
function shuffleArray(arr) {
  let a = arr.slice();
  for (let i = a.length-1; i>0; i--) {
    let j = Math.floor(Math.random()*(i+1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
// TEMP: Remove bad admin question
// TEMP: Remove admin-added bad question with text "ko"
}

// TEMP: Remove admin-added bad question with text "ko"
for (let key of Object.keys(localStorage)) {
  if (key.startsWith("questions_")) {
    let list = JSON.parse(localStorage.getItem(key));
    list = list.filter(q => q.question !== "ko");
    localStorage.setItem(key, JSON.stringify(list));
  }
}

