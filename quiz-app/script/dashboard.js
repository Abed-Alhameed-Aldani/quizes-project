
const currentUser = localStorage.getItem("currentUser");
if (currentUser !== "admin@quiz.com") {
  alert("Access denied. Admins only.");
  window.location.href = "index.html";
}


const users = JSON.parse(localStorage.getItem("users")) || [];
const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

const userTable = document.getElementById("userTable");
