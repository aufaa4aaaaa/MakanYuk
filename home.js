// Fungsi animasi saat scroll
document.addEventListener("DOMContentLoaded", () => {
  const animatedItems = document.querySelectorAll(".animate");

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    animatedItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < triggerBottom) {
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Jalankan saat pertama kali
});
