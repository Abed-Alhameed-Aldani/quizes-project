
const currentUser = localStorage.getItem("currentUser");
if (currentUser !== "admin@quiz.com") {
  alert("Access denied. Admins only.");
  window.location.href = "index.html";
}
