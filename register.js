document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Pendaftaran berhasil! Silakan login.");
    window.location.href = "index.html"; 
  });
});
