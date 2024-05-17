const question = [
  {
    question: "Which Is Largest Animal In The World?",
    answer:[
      {Text:"Shark",correct:"false" },
      {Text:"Blue Whale",correct:"true" },
      {Text:"Elephent",correct:"false" },
      {Text:"Giraffi",correct:"false" }
    ]
  },
  {
    question: "Which of the following is NOT a valid JavaScript data type?",
    answer:[
      {Text:"String",correct:"false" },
      {Text:"Boolean",correct:"false" },
      {Text:"Float",correct:"false" },
      {Text:"Character",correct:"true" }
    ]
  },
  {
    question: " Which keyword is used to declare a variable in JavaScript?",
    answer:[
      {Text:"All of the Below",correct:"true" },
      {Text:"const",correct:"false" },
      {Text:"let",correct:"false" },
      {Text:"var",correct:"false" }
    ]
  },
  {
    question: "Which of the following statements is used to exit a loop in JavaScript?",
    answer:[
      {Text:"exit",correct:"false" },
      {Text:"return",correct:"false" },
      {Text:"break",correct:"true" },
      {Text:" continue",correct:"false" }
    ]
  }
];
const questionElem =document.querySelector("#question");
const answerBtn =document.querySelector("#answerBtn");
const btn =document.querySelector(".btn");
const nextBtn =document.querySelector("#nextBtn");

let currentQuestionIndex =0;
let score = 0;

function startQuiz(){
  currentQuestionIndex=0;
  score=0;
  nextBtn.innerHTML="Next";
  showQuestion();
};
function showQuestion(){
  restState();
  const currentQuestion = question[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElem.innerHTML = questionNo + ". " + currentQuestion.question;
  currentQuestion.answer.forEach(answer =>{
 const button =document.createElement("button");
 button.innerHTML = answer.Text
 button.classList.add("btn");
 answerBtn.appendChild(button);
 if(answer.correct){
  button.dataset.correct= answer.correct;
 }
button.addEventListener("click" , selectAnswer)
  });
};
function  restState(){
  nextBtn.style.display = "none"
  while(answerBtn.firstChild){
    answerBtn.removeChild(answerBtn.firstChild)
  }
}
function selectAnswer(e){
 const selectedBtn = e.target;
 const isCorrect = selectedBtn.dataset.correct === "true" ;
 if(isCorrect){
  selectedBtn.classList.add("correct");
  score++;
 }else{
  selectedBtn.classList.add("incorrect");
 }
 Array.from(answerBtn.children).forEach(button=>{
  if(button.dataset.correct === "true"){
    button.classList.add("correct");
  };
  button.disabled = "true";
})
 nextBtn.style.display = "block";
}
function  showScore(){
  restState();
  questionElem.innerHTML = `Your Scored ${score} Out of ${question.length}`;
  nextBtn.innerHTML = "Play Again";
  nextBtn.style.display= "block";
}
function handelNextBtn(){
 currentQuestionIndex++;
 if(currentQuestionIndex<question.length){
  showQuestion();
 }else{
  showScore();
 }
}
nextBtn.addEventListener("click" , ()=>{
  if(currentQuestionIndex<question.length){
    handelNextBtn();
  }else{
    startQuiz();
  }
})
startQuiz();