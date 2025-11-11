// script.js

const originalQuestions = [
    { term: "Hemoglobin", definition: "12-18 g/dL" },
    { term: "Hematocrit", definition: "37-52%" },
    { term: "White Blood Cell", definition: "5,000-10,000 mm(3)" },
    { term: "Red Blood Cell", definition: "4.2-6.1 mm(3)" },
    { term: "Platelet Count", definition: "150,000-400,000 mm(3)" },
    { term: "Glucose", definition: "70-110 mg/dL" },
    { term: "Calcium", definition: "9-10.5 mg/dL" },
    { term: "Chloride", definition: "98-106 mEq/L" },
    { term: "Sodium", definition: "135-145 mEq/L" },
    { term: "Potassium", definition: "3.5-5 mEq/L" },
    { term: "Creatinine", definition: ".5-1.2 mg/dL" },
    { term: "Blood Urea Nitrogen", definition: "10-20 mg/dL" },
    { term: "Albumin", definition: "3.5-5 g/dL" },
    { term: "Thyroid Stimulating Hormone", definition: ".5-5 milli-IU/L" },
    { term: "Serum Thyroxine", definition: "5-12 ng/dL" },
    { term: "Serum Triiodothyronine", definition: "70-220 ng/dL" },
    { term: "Magnesium", definition: "Serum: 1.5-2.5 mEq/L" },
    { term: "Magnesium", definition: "Therapeutic: 3.3-6.6 mEq/L" },
    { term: "Phosphorus", definition: "2-4.5 mEq/L" },
    { term: "pH", definition: "7.35-7.45" },
    { term: "Partial Pressure Carbon Dioxide", definition: "35-45 mm Hg" },
    { term: "Partial Pressure Oxygen", definition: "80-100 mm Hg" },
    { term: "Bicarbonate", definition: "22-28 mEq/L" },
    { term: "Oxygen Saturation", definition: "95-100%" }
];

const STREAK_TARGET = 15;
const STREAKS_TO_WIN = 3;

function getQuestionKey(question) {
    return `${question.term}||${question.definition}`;
}

let upcomingQuestions = shuffleArray([...originalQuestions]);
let currentQuestion = null;
let currentStreak = 0;
let completedStreaks = 0;
let totalCorrect = 0;
let totalAttempted = 0;
let gameOver = false;

const questionStats = new Map();
originalQuestions.forEach(question => {
    questionStats.set(getQuestionKey(question), {
        term: question.term,
        definition: question.definition,
        correct: 0,
        incorrect: 0
    });
});

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    if (gameOver) {
        return;
    }

    if (upcomingQuestions.length === 0) {
        upcomingQuestions = shuffleArray([...originalQuestions]);
    }

    currentQuestion = upcomingQuestions[0];
    questionElement.textContent = `What does "${currentQuestion.term}" mean?`;

    const { correctDefinition, allOptions } = generateOptions(currentQuestion);

    optionsContainer.innerHTML = "";

    allOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => handleAnswer(option === correctDefinition, button, correctDefinition));
        optionsContainer.appendChild(button);
    });

    nextButton.disabled = true;
    updateScoreboard();
}

function generateOptions(question) {
    const correctDefinition = question.definition;
    const distractors = getRealDistractors(correctDefinition, 3);
    const allOptions = [correctDefinition, ...distractors];
    shuffleArray(allOptions);
    return { correctDefinition, allOptions };
}

function getRealDistractors(correctDefinition, count) {
    const filtered = originalQuestions.filter(q => q.definition !== correctDefinition);
    const chosen = [];
    while (chosen.length < count) {
        const randIndex = Math.floor(Math.random() * filtered.length);
        const distractor = filtered[randIndex].definition;
        if (!chosen.includes(distractor)) {
            chosen.push(distractor);
        }
    }
    return chosen;
}

function handleAnswer(isCorrect, button, correctDefinition) {
    if (gameOver || !currentQuestion) {
        return;
    }

    button.classList.add(isCorrect ? "correct" : "incorrect");
    totalAttempted++;

    const stats = questionStats.get(getQuestionKey(currentQuestion));

    if (isCorrect) {
        totalCorrect++;
        currentStreak++;
        stats.correct++;
        handleCompletedQuestion();
    } else {
        stats.incorrect++;
        currentStreak = 0;
        highlightCorrectAnswer(correctDefinition);
        resetQueueAfterMistake();
    }

    Array.from(optionsContainer.querySelectorAll("button")).forEach(btn => btn.disabled = true);
    nextButton.disabled = gameOver;
    updateScoreboard();
}

function handleCompletedQuestion() {
    // Remove the question that was just answered from the front of the queue
    upcomingQuestions.shift();

    if (currentStreak === STREAK_TARGET) {
        completedStreaks++;
        currentStreak = 0;

        if (completedStreaks === STREAKS_TO_WIN) {
            endGame();
            return;
        }

        upcomingQuestions = shuffleArray([...originalQuestions]);
        questionElement.textContent = "Streak complete! Press Next to start a fresh set.";
        optionsContainer.innerHTML = "";
    }
}

function highlightCorrectAnswer(correctDefinition) {
    const allButtons = Array.from(optionsContainer.children);
    for (let btn of allButtons) {
        if (btn.textContent === correctDefinition) {
            btn.classList.add("correct");
            break;
        }
    }
}

function resetQueueAfterMistake() {
    const missedQuestion = currentQuestion;

    let newQueue = shuffleArray([...originalQuestions]);
    newQueue = newQueue.filter(q => q.term !== missedQuestion.term);

    const insertionRange = Math.min(STREAK_TARGET, newQueue.length + 1);
    const insertionIndex = Math.floor(Math.random() * insertionRange);
    newQueue.splice(insertionIndex, 0, missedQuestion);

    upcomingQuestions = newQueue;
}

function updateScoreboard() {
    scoreElement.textContent = `Streak: ${currentStreak}/${STREAK_TARGET} | Runs: ${completedStreaks}/${STREAKS_TO_WIN} | Correct: ${totalCorrect}`;
}

nextButton.addEventListener("click", () => {
    if (gameOver) {
        return;
    }

    currentQuestion = null;
    loadQuestion();
});

function endGame() {
    gameOver = true;
    nextButton.disabled = true;

    questionElement.textContent = "Game Complete!";

    const accuracy = totalAttempted ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

    const summary = document.createElement("div");
    summary.innerHTML = `
        <p>You achieved three streaks of ${STREAK_TARGET} correct answers!</p>
        <p>Total Questions Answered: ${totalAttempted}</p>
        <p>Overall Accuracy: ${accuracy}%</p>
    `;

    const troubleSpots = Array.from(questionStats.values())
        .filter(stat => stat.incorrect > 0)
        .sort((a, b) => b.incorrect - a.incorrect || a.term.localeCompare(b.term));

    optionsContainer.innerHTML = "";
    optionsContainer.appendChild(summary);

    if (troubleSpots.length > 0) {
        const header = document.createElement("h2");
        header.textContent = "Terms to Review";
        optionsContainer.appendChild(header);

        const list = document.createElement("ul");
        troubleSpots.forEach(stat => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${stat.term}</strong>: ${stat.definition} — missed ${stat.incorrect} time(s)`;
            list.appendChild(listItem);
        });
        optionsContainer.appendChild(list);
    } else {
        const perfect = document.createElement("p");
        perfect.textContent = "Perfect work! You never missed a term.";
        optionsContainer.appendChild(perfect);
    }

    updateScoreboard();
}

// Utility function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Start the quiz
loadQuestion();
