let currentQuestion = 0;
let score = 0;
const totalQuestions = 5;
const questions = [
    {
        question: "Was sind Fake News?",
        answers: ["Falsche Informationen", "Wahre Informationen", "Politische Nachrichten", "Unterhaltsame Nachrichten"],
        correctAnswer: 1
    },
    {
        question: "Wie verbreiten sich Fake News am häufigsten?",
        answers: ["Durch persönliche Gespräche", "In sozialen Medien", "Durch Fernsehen", "Durch Bücher"],
        correctAnswer: 2
    },
    {
        question: "Warum sind Fake News gefährlich?",
        answers: ["Sie sind unterhaltsam", "Sie können zu Missverständnissen führen", "Sie sind lustig", "Alle oben genannten"],
        correctAnswer: 2
    },
    {
        question: "Welche Plattformen sind am meisten betroffen von Fake News?",
        answers: ["Facebook", "Twitter", "WhatsApp", "Alle oben genannten"],
        correctAnswer: 4
    },
    {
        question: "Wie kann man Fake News erkennen?",
        answers: ["Überprüfung der Quellen", "Ignorieren der Nachrichten", "Folgen von Trends", "Vertrauen auf Gerüchte"],
        correctAnswer: 1
    }
];
function loadQuestion() {
    const current = questions[currentQuestion];
    document.getElementById("question-text").textContent = current.question;
    const buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach((btn, index) => {
        btn.textContent = current.answers[index];
        btn.disabled = false;  
    });
}
function checkAnswer(selectedAnswer) {
    const current = questions[currentQuestion];
    const feedbackElement = document.getElementById("feedback");

    if (selectedAnswer === current.correctAnswer) {
        score++;
        feedbackElement.textContent = "Richtig!";
        feedbackElement.className = "feedback correct";  
    } else {
        feedbackElement.textContent = "Leider falsch!";
        feedbackElement.className = "feedback incorrect"; 
    }

    const buttons = document.querySelectorAll(".answer-btn");
    buttons.forEach((btn) => {
        btn.disabled = true;  
    });

    document.getElementById("next-btn").style.display = "inline-block";  
}
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
        loadQuestion();
        document.getElementById("feedback").textContent = "";
        document.getElementById("next-btn").style.display = "none"; 
    } else {
        showResult();
    }
}
function showResult() {
    
    document.getElementById("quiz-container").style.display = "none";
    const medalImage = document.getElementById("medal-image");
    if (score === 5) {
        medalImage.src = "images/gold-medal.jpeg";  
    } else if (score >= 3) {
        medalImage.src = "images/silver-medal.jpeg"; 
    } else {
        medalImage.src = "images/bronze-medal.jpeg";  
    }
document.getElementById("score-text").textContent = `Du hast ${score} von ${totalQuestions} Punkten erreicht!`;
document.getElementById("result-container").style.display = "block";
const redirectButton = document.createElement("button");
redirectButton.textContent = "Weiter";
redirectButton.className = "next-btn";  
redirectButton.onclick = function () 
{
        window.location.href = "design.html";  
    };
document.getElementById("result-container").appendChild(redirectButton);
}
loadQuestion();
