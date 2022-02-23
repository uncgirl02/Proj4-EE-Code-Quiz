var timerEL = document.querySelector("#countdown")



// Variable with array of questions and answers
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<js>", "<javascript>", "<scripting>", "<script>"],
        correct: "<script>"
    },
    {
        question: "How can you add a comment in a Javascript?",
        answers: ["//This is a comment", "*This is a comment*", "<!--This is a comment-->", "'This is a comment'"],
        correct: "//This is a comment"
    },
    {
        question: "How do you commit changes from your computer in the main directory to your repository in GitHub?",
        answers: ["git add -a", "git push origin main", "git push origin develop", "git pull origin main"],
        correct: "git push origin main"
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: ["variable carName", "v carName", "var carName", "var Carname"],
        correct: "var carName"
    },

];

// Function to begin the quiz
function beginQuiz(){
    var startingScreen = document.getElementById("codingQuiz");
    startingScreen.setAttribute("class", "invisible");
    questionsEl.removeAttribute("class");
    timerId = setInterval(timer, 1000);
    timerEl.textContent = quizTime;
    getQuizQuestion();
}

//Function to begin countdown
function countdown() {
    var timeLeft = 100
    timerEL.textContent = timeLeft--;
    
    if (quizTime <=0) {
        endQuiz();
}