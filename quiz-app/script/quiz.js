const currentQuizId = parseInt(localStorage.getItem("currentQuizId"));
const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
const currentUserEmail = localStorage.getItem("currentUser");
let users = JSON.parse(localStorage.getItem("users")) || [];
