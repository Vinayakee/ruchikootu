

const questions = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: "Mars" },
    { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Mark Twain", "Charles Dickens", "William Shakespeare", "Jane Austen"], answer: "William Shakespeare" },
    { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2", "NaCl"], answer: "H2O" },
    { question: "Which element has the atomic number 1?", options: ["Oxygen", "Hydrogen", "Carbon", "Nitrogen"], answer: "Hydrogen" },
    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"], answer: "Mitochondria" },
    { question: "What is the capital of Japan?", options: ["Seoul", "Tokyo", "Beijing", "Bangkok"], answer: "Tokyo" },
    { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
    { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Quartz"], answer: "Diamond" },
    { question: "Who painted the Mona Lisa?", options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "Leonardo da Vinci" },
    { question: "What is the smallest prime number?", options: ["0", "1", "2", "3"], answer: "2" },
    { question: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Thailand", "Vietnam"], answer: "Japan" },
    { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Pepper", "Onion"], answer: "Avocado" },
    { question: "Which organ is responsible for pumping blood in the human body?", options: ["Liver", "Lungs", "Heart", "Kidneys"], answer: "Heart" },
    { question: "What is the largest continent?", options: ["Africa", "Asia", "Europe", "Antarctica"], answer: "Asia" }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');
const submitButton = document.getElementById('submit');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectOption(option);
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    questionElement.innerText = `Your score is ${score} out of ${questions.length}`;
    optionsElement.innerHTML = '';
    submitButton.style.display = 'none';
}

submitButton.addEventListener('click', loadQuestion);
loadQuestion();