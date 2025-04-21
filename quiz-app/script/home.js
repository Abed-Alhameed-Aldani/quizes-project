
const currentUser = localStorage.getItem("currentUser") || "User";

const username = currentUser.split("@")[0];
document.getElementById("userEmail").textContent = username;

const sampleQuizzes = [
  { id: 1, title: "MATH" },
  { id: 2, title: "Physics" },
  { id: 3, title: "Chemistry" }
];

if (!localStorage.getItem("quizzes")) {
  localStorage.setItem("quizzes", JSON.stringify(sampleQuizzes));
}


const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
const quizList = document.getElementById("quizList");

quizzes.forEach((quiz) => {
  const div = document.createElement("div");
  div.className = "quiz-item";
  div.textContent = quiz.title;

 
  div.addEventListener("click", () => {
    localStorage.setItem("currentQuizId", quiz.id);
    window.location.href = "quiz.html";
  });

  
  quizList.appendChild(div);
});

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
} 
