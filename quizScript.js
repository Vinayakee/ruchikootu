const questions = [
    {
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Avocado", "Onion", "Pepper"],
        answer: 1
    },
    {
        question: "Which country is famous for sushi?",
        options: ["India", "China", "Thailand", "Japan"],
        answer: 3
    },
    {
        question: "Which spice is commonly used in biryani?",
        options: ["Cinnamon", "Basil", "Thyme", "Oregano"],
        answer: 0
    },
    {
        question: "Which of these is a dessert?",
        options: ["Lasagna", "Brownie", "Burger", "Spaghetti"],
        answer: 1
    },
    {
        question: "What is paneer made from?",
        options: ["Milk", "Flour", "Rice", "Lentils"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

const questionBox = document.getElementById("question");
const optionsList = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreDisplay = document.getElementById("score");

function loadQuestion() {
    selectedAnswer = null;
    nextBtn.disabled = true;
    const q = questions[currentQuestion];
    questionBox.textContent = q.question;
    optionsList.innerHTML = "";

    q.options.forEach((option, index) => {
        const li = document.createElement("li");
        li.textContent = option;
        li.classList.add("option-item");
        li.onclick = () => {
            Array.from(optionsList.children).forEach(child => child.classList.remove("selected"));
            li.classList.add("selected");
            selectedAnswer = index;
            nextBtn.disabled = false;
        };
        optionsList.appendChild(li);
    });
}

nextBtn.onclick = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.getElementById("quiz-box").style.display = "none";
        resultBox.style.display = "block";
        scoreDisplay.textContent = score;
    }
};

loadQuestion();
