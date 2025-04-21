
const currentUser = localStorage.getItem("currentUser") || "User";

const username = currentUser.split("@")[0];
document.getElementById("userEmail").textContent = username;
