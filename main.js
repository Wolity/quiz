let start = document.getElementById("start");
let main = document.getElementById("main");
let result = document.getElementById("result");

let currentQuestion = 0;
let countSuccess = 0;
let allQuestions = [
  { question: "2+2", correct: 4, answers: [4, 8, 10, 23] },
  { question: "4+4", correct: 8, answers: [2, 14, 9, 8] },
  { question: "7+3", correct: 10, answers: [11, 10, 9, 8] },
];
start.addEventListener("click", startProgram);
function startProgram() {
  start.classList.add("none");
  main.classList.remove("none");
  result.classList.add("none");
  generateQuestion();
}
function generateQuestion() {
  let question = allQuestions[currentQuestion].question;
  main.innerHTML = `<h1 class="question">${question}</h1>`;

  let answers = allQuestions[currentQuestion].answers;
  let btn_block = "";
  for (let i of answers) {
    btn_block += `<button class="btn" onclick="checkQuestion(${i})">${i}</button>`
  }
  main.innerHTML += `<nav class="btn_block">${btn_block}</nav>`
  
}
function checkQuestion(num) {
    correct = allQuestions[currentQuestion].correct;
    if (num == correct) {
        countSuccess += 1;
    }
    currentQuestion += 1;
    if (allQuestions.length > currentQuestion) {
        generateQuestion();
    }
    else{
        stopQuiz();
    }
  }
  function stopQuiz() {
      start.classList.remove("none");
      main.classList.add("none");
      result.classList.remove("none")
      result.innerHTML = `Решено ${countSuccess} из ${allQuestions.length}`;

      currentQuestion = 0;
      countSuccess = 0;
  }