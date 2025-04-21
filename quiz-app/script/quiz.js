const currentQuizId = parseInt(localStorage.getItem("currentQuizId"));
const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
const currentUserEmail = localStorage.getItem("currentUser");
let users = JSON.parse(localStorage.getItem("users")) || [];


const allQuestions = {
  1: [
    {
      question: "1+1?",
      options: ["3", "1", "2"],
      answer: "2"
    },
    {
      question: "2+2?",
      options: ["4", "2", "1"],
      answer: "4"
    },
    {
      question: "4+4?",
      options: ["8", "4", "2"],
      answer: "8"
    }
  ],
  2: [
    {
      question: "moving car is??",
      options: ["moving", "swimming", "jumping"],
      answer: "moving"
    },
    {
      question: "who are u?",
      options: ["nabiha", "abed", "taha"],
      answer: "taha"
    },
    {
      question: "how much are u getting",
      options: ["3.5", "4", "4.5"],
      answer: "4"
    }
  ],
  3: [
    {
      question: "Capital of Lebanon?",
      options: ["Berlin", "Beirut", "Madrid"],
      answer: "Beirut"
    },
    {
      question: "How old is nabiha",
      options: ["3", "21", "5"],
      answer: "21"
    },
    {
      question: "Which planet is the best for coding",
      options: ["Venus", "Mercury", "Earth"],
      answer: "Mercury"
    }
  ]
};


const quiz = quizzes.find(q => q.id === currentQuizId);
document.getElementById("quizTitle").textContent = quiz ? quiz.title : "Quiz";


const questions = allQuestions[currentQuizId];
const form = document.getElementById("quizForm");

questions.forEach((q, index) => {
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

  const optionsDiv = document.createElement("div");
  optionsDiv.className = "options";

  q.options.forEach(opt => {
    const id = `q${index}_${opt}`;
    optionsDiv.innerHTML += `
      <label for="${id}">
        <input type="radio" name="q${index}" value="${opt}" id="${id}"> ${opt}
      </label>`;
  });

  div.appendChild(optionsDiv);
  form.appendChild(div);
});



document.getElementById("submitBtn").addEventListener("click", () => {
  let score = 0;
  questions.forEach((q, index) => {
    const selected = form.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  document.getElementById("scoreBox").classList.remove("hidden");
  document.getElementById("scoreBox").textContent = `You scored ${score} out of ${questions.length}!`;

  
  const userIndex = users.findIndex(u => u.email === currentUserEmail);
  if (userIndex !== -1) {
    users[userIndex].scores = users[userIndex].scores || [];
    users[userIndex].scores.push({ quizId: currentQuizId, score });
    localStorage.setItem("users", JSON.stringify(users));
  }
