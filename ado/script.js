const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const carouselImages = document.querySelector('.carousel-images');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0; // Index de départ

// Calculer la largeur de chaque élément
const itemWidth = carouselItems[0].clientWidth;

// Fonction pour mettre à jour la position du carousel
function updateCarousel() {
  carouselImages.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Gestion du clic sur le bouton "Précédent"
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    // Si on est à la première image, aller à la dernière
    currentIndex = carouselItems.length - 1;
  }
  updateCarousel();
});

// Gestion du clic sur le bouton "Suivant"
nextButton.addEventListener('click', () => {
  if (currentIndex < carouselItems.length - 1) {
    currentIndex++;
  } else {
    // Si on est à la dernière image, revenir à la première
    currentIndex = 0;
  }
  updateCarousel();
});

// Initialiser la position du carousel
updateCarousel();
