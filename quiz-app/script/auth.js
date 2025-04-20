
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

