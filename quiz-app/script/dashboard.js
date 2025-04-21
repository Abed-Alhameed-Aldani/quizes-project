
const currentUser = localStorage.getItem("currentUser");
if (currentUser !== "admin@quiz.com") {
  alert("Access denied. Admins only.");
  window.location.href = "index.html";
}


const users = JSON.parse(localStorage.getItem("users")) || [];
const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

const userTable = document.getElementById("userTable");



let tableHTML = "<table><tr><th>Email</th><th>Scores</th></tr>";

users.forEach(user => {
  const scoreList = (user.scores || [])
    .map(score => {
      const quizTitle = quizzes.find(q => q.id === score.quizId)?.title || "Unknown Quiz";
      return `${quizTitle}: ${score.score}`;
    }).join("<br>");

  tableHTML += `<tr><td>${user.email}</td><td>${scoreList || "No scores yet"}</td></tr>`;
});

tableHTML += "</table>";
userTable.innerHTML = tableHTML;


function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
} 
