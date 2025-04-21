
const currentUser = localStorage.getItem("currentUser") || "User";

const username = currentUser.split("@")[0];
document.getElementById("userEmail").textContent = username;

const sampleQuizzes = [
  { id: 1, title: "MATH" },
  { id: 2, title: "Physics" },
  { id: 3, title: "Chemistry" }
];
