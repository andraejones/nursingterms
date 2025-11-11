// script.js

const originalQuestions = [
    { term: "a/an", definition: "Without, not" },
    { term: "ab", definition: "Away from" },
    { term: "Abdomen/o", definition: "Abdomen" },
    { term: "Acr/o", definition: "Extremity" },
    { term: "Ad", definition: "Toward" },
    { term: "Adeno", definition: "Gland" },
    { term: "Adipo", definition: "Fat" },
    { term: "-algia", definition: "Pain" },
    { term: "Andro", definition: "Male" },
    { term: "Angio", definition: "Vessel" },
    { term: "Ante", definition: "Before, in front of" },
    { term: "Antero", definition: "Anterior, front" },
    { term: "Anti", definition: "Against" },
    { term: "Arterio", definition: "Artery" },
    { term: "Arthro", definition: "Joint" },
    { term: "Audio", definition: "Hearing" },
    { term: "Auto", definition: "Self, own" },
    { term: "Bacterio", definition: "Bacteria" },
    { term: "Bi", definition: "Two" },
    { term: "Brachio", definition: "Arm" },
    { term: "Brachy", definition: "Short" },
    { term: "Brady", definition: "Slow" },
    { term: "Broncho", definition: "Bronchus" },
    { term: "-capnia", definition: "Carbon dioxide" },
    { term: "Carcino", definition: "Cancer" },
    { term: "Cardio", definition: "Heart" },
    { term: "Cardia", definition: "Heart condition" },
    { term: "-cele", definition: "Hernia, swelling" },
    { term: "Cephalo", definition: "Head" },
    { term: "Cerebro", definition: "Cerebrum" },
    { term: "-cide", definition: "Killing" },
    { term: "Circum", definition: "Around" },
    { term: "-cision", definition: "A cutting" },
    { term: "Contra", definition: "Against, opposite" },
    { term: "Cranio", definition: "Cranium" },
    { term: "-crine", definition: "Secrete" },
    { term: "Cutaneo", definition: "Skin" },
    { term: "Cyano", definition: "Blue" },
    { term: "Cysto", definition: "Bladder" },
    { term: "Cyto", definition: "Cell" },
    { term: "De-", definition: "Cessation" },
    { term: "Derm", definition: "Skin" },
    { term: "Di", definition: "Double" },
    { term: "Disto", definition: "Far, farthest" },
    { term: "Dorso", definition: "Back" },
    { term: "Duct", definition: "To lead" },
    { term: "-duction", definition: "Act of leading" },
    { term: "Dys", definition: "Bad, painful" },
    { term: "-ectomy", definition: "Excision" },
    { term: "-emia", definition: "Blood" },
    { term: "En/endo", definition: "In, within" },
    { term: "Encephalo", definition: "Brain" },
    { term: "Epi", definition: "Above" },
    { term: "Erythro", definition: "Red" },
    { term: "-esis", definition: "Condition" },
    { term: "Eu", definition: "Normal" },
    { term: "Ex", definition: "Out" },
    { term: "Gastro", definition: "Stomach" },
    { term: "Gluco", definition: "Sugar" },
    { term: "-gnosis", definition: "Knowing" },
    { term: "Gyn", definition: "Female" },
    { term: "Hem", definition: "Blood" },
    { term: "Hemi", definition: "One half" },
    { term: "Hepato", definition: "Liver" },
    { term: "Histo", definition: "Tissue" },
    { term: "Homeo", definition: "Same, alike" },
    { term: "Hydro", definition: "Water" },
    { term: "Hypo", definition: "Under, below" },
    { term: "Hyper", definition: "Excessive, above" },
    { term: "Hystero", definition: "Uterus" },
    { term: "-ia", definition: "Condition" },
    { term: "-iasis", definition: "Abnormal condition" },
    { term: "Idio", definition: "Unknown" },
    { term: "Immuno", definition: "Immune" },
    { term: "-ine", definition: "Pertaining to" },
    { term: "Infero", definition: "Lower, below" },
    { term: "Inter", definition: "Between" },
    { term: "Intra", definition: "In, within" },
    { term: "Iso", definition: "Equal, same" },
    { term: "-itis", definition: "Inflammation" },
    { term: "-ization", definition: "Process" },
    { term: "Jaund", definition: "Yellow" },
    { term: "Kinesio/-kinesia", definition: "Movement" },
    { term: "Laparo", definition: "Abdomen" },
    { term: "Latero", definition: "Side" },
    { term: "Leuko", definition: "White" },
    { term: "Lipo", definition: "Fat" },
    { term: "-lysis", definition: "Destruction of" },
    { term: "Macro", definition: "Large" },
    { term: "-malacia", definition: "Softening" },
    { term: "Mammo", definition: "Breast" },
    { term: "-mania", definition: "State of mental disorder, frenzy" },
    { term: "Medio", definition: "Middle" },
    { term: "Mega/megalo/-megaly", definition: "Enlargement" },
    { term: "Meso", definition: "Middle" },
    { term: "Meta", definition: "Beyond" },
    { term: "Micro", definition: "Small" },
    { term: "Multi", definition: "Many" },
    { term: "Musculo", definition: "Muscle" },
    { term: "Myo", definition: "Muscle" },
    { term: "Myco", definition: "Fungus" },
    { term: "Myelo", definition: "Bone marrow" },
    { term: "Narc", definition: "Stupor, sleep, numbness" },
    { term: "Naso", definition: "Nose" },
    { term: "Necro", definition: "Death" },
    { term: "Neo", definition: "New" },
    { term: "Nephron", definition: "Kidney" },
    { term: "Neuro", definition: "Nerve" },
    { term: "Noct", definition: "Night" },
    { term: "Nulli", definition: "None" },
    { term: "Oligo", definition: "Scanty" },
    { term: "-oma", definition: "Tumor" },
    { term: "-ipia", definition: "Vision" },
    { term: "-ose", definition: "Pertaining to, sugar" },
    { term: "-osis", definition: "Abnormal condition" },
    { term: "Osteo", definition: "Bone" },
    { term: "Oto", definition: "Ear" },
    { term: "Oxi/oxo/-oxia", definition: "Oxygen" },
    { term: "-paresis", definition: "Partial paralysis" },
    { term: "-patho/-pathy", definition: "Disease" },
    { term: "-penia", definition: "Decrease, deficiency" },
    { term: "-pepsia", definition: "Digestion" },
    { term: "Per", definition: "Through" },
    { term: "Peri", definition: "Around" },
    { term: "Phago/-phage/-phagia", definition: "Swallowing" },
    { term: "-phasia", definition: "Speech" },
    { term: "-phobia", definition: "Fear" },
    { term: "-phoria", definition: "Feeling, mental state" },
    { term: "Photo", definition: "Light" },
    { term: "-plasty", definition: "Surgical repair" },
    { term: "-plegia", definition: "Paralysis" },
    { term: "-plexy", definition: "Stroke" },
    { term: "-pnea", definition: "Breathing" },
    { term: "Pneumo", definition: "Air, lung" },
    { term: "Poly", definition: "Many" },
    { term: "-porosis", definition: "Porous" },
    { term: "Post", definition: "After, behind" },
    { term: "Postero", definition: "Back of body, posterior" },
    { term: "-pradial", definition: "Meal" },
    { term: "Pre", definition: "Before" },
    { term: "Presby", definition: "Old age" },
    { term: "Procto", definition: "Anus, rectum" },
    { term: "Proximo", definition: "Near, nearest" },
    { term: "Pseudo", definition: "False" },
    { term: "Psych", definition: "Mind" },
    { term: "Pub", definition: "Pelvis bone" },
    { term: "Pyo", definition: "Pus" },
    { term: "Pyelo", definition: "Renal pelvis" },
    { term: "Quadri", definition: "Four" },
    { term: "Recto", definition: "Rectum" },
    { term: "Reno", definition: "Kidney" },
    { term: "Retro", definition: "Backward, behind" },
    { term: "Rhino", definition: "Nose" },
    { term: "-rrhage/-rrhagia", definition: "Bursting forth" },
    { term: "-rrhea", definition: "Discharge" },
    { term: "-rrhexis", definition: "Rupture" },
    { term: "Sacro", definition: "Sacrum" },
    { term: "-sarcoma", definition: "Malignant tumor" },
    { term: "Sclera", definition: "Hardening; white of eye" },
    { term: "-scopy", definition: "Visual exam" },
    { term: "Semi", definition: "One half" },
    { term: "-sis", definition: "State of; condition" },
    { term: "-stasis", definition: "Standing still" },
    { term: "-stenosis", definition: "Narrowing" },
    { term: "-stomy", definition: "Forming an opening" },
    { term: "Sub", definition: "Under, below" },
    { term: "Super", definition: "Upper, above" },
    { term: "Tachy", definition: "Rapid; fast" },
    { term: "Thermo", definition: "Heat" },
    { term: "Thrombo", definition: "Blood clot" },
    { term: "-tocia", definition: "Childbirth, labor" },
    { term: "Tomo", definition: "To cut" },
    { term: "-tomy", definition: "Incision" },
    { term: "Toxo", definition: "Poison" },
    { term: "Tri", definition: "Three" },
    { term: "-trophy", definition: "Development; nourishment" },
    { term: "-ule", definition: "Small, minute" },
    { term: "-uria", definition: "Urine" },
    { term: "Utero", definition: "Uterus" },
    { term: "Vaso", definition: "Vessel" },
    { term: "Ventro", definition: "Belly, belly side" },
    { term: "-version", definition: "Turning" },
    { term: "Viscero", definition: "Internal organs" },
    { term: "Vol", definition: "Volume" },
    { term: "Xantho", definition: "Yellow" },
    { term: "-y", definition: "Condition or process" }
];

const STREAK_TARGET = 15;
const STREAKS_TO_WIN = 3;

let upcomingQuestions = shuffleArray([...originalQuestions]);
let currentQuestion = null;
let currentStreak = 0;
let completedStreaks = 0;
let totalCorrect = 0;
let totalAttempted = 0;
let gameOver = false;

const questionStats = new Map();
originalQuestions.forEach(question => {
    questionStats.set(question.term, {
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

    const stats = questionStats.get(currentQuestion.term);

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
