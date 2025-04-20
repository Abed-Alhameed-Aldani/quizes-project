
document.getElementById('loginTab').addEventListener('click', () => {
  document.getElementById('loginForm').classList.remove('hidden');
  document.getElementById('registerForm').classList.add('hidden');
});

document.getElementById('registerTab').addEventListener('click', () => {
  document.getElementById('registerForm').classList.remove('hidden');
  document.getElementById('loginForm').classList.add('hidden');
});




function register() {
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  if (!email || !password) return alert("Please fill all fields.");

  let users = JSON.parse(localStorage.getItem('users')) || [];

  if (users.find(user => user.email === email)) {
    return alert("User already exists!");
  }

  users.push({ email, password, scores: [] });
  localStorage.setItem('users', JSON.stringify(users));

  alert("Registration successful. You can now login.");
  document.getElementById('loginTab').click();
}





function login() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (!email || !password) return alert("Please fill all fields.");

  
  if (email === "admin@quiz.com" && password === "admin123") {
    localStorage.setItem("currentUser", email);
    return window.location.href = "dashboard.html";
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(user => user.email === email && user.password === password);

  if (!user) return alert("Invalid credentials!");

  localStorage.setItem("currentUser", email);
  window.location.href = "home.html";
}
