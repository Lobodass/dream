document.addEventListener("DOMContentLoaded", function () {
    const hiddenText = document.getElementById("hiddenText");

    function checkScroll() {
      const position = hiddenText.getBoundingClientRect().top;
      const screenHeight = window.innerHeight;

      if (position < screenHeight - 50) {
        hiddenText.classList.add("show");
        window.removeEventListener("scroll", checkScroll); // Вимикаємо, щоб не спрацьовувало повторно
      }
    }

    window.addEventListener("scroll", checkScroll);
 
  });
  document.addEventListener("scroll", function () {
    let images = document.querySelectorAll(".image");
    images.forEach((img) => {
      let rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        img.classList.add("visible");
      }
    });
  });

    