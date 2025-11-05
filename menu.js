// ====== ANIMASI SAAT SCROLL ======
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".category-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));

  // ====== FITUR SEARCH OTOMATIS + AUTO SCROLL KE HASIL ======
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase().trim();
    let firstVisible = null;

    cards.forEach(card => {
      const title = card.querySelector("h2").textContent.toLowerCase();

      // Hanya cocokkan dengan judul (tanpa deskripsi)
      if (title.includes(keyword)) {
        card.style.display = "block";
        if (!firstVisible) firstVisible = card;
      } else {
        card.style.display = "none";
      }
    });

    // Scroll otomatis ke kartu pertama yang cocok
    if (firstVisible && keyword.length > 0) {
      const yOffset = -120; // biar gak ketutupan navbar
      const y = firstVisible.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  });
});
