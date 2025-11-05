const form = document.getElementById('loginForm');
const button = document.querySelector('.button');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const pass = document.getElementById('password').value.trim();

  if (!/.+@.+\..+/.test(email)) {
    alert("Format email tidak valid!");
    return;
  }

  if (pass.length < 6) {
    alert("Kata sandi minimal 6 karakter!");
    return;
  }
  button.classList.add("loading");

  setTimeout(() => {
    alert("Login berhasil!");
    window.location.href = "home.html";
  }, 1500); 
});
