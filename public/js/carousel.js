const carouselItems = document.querySelectorAll('.carousel-item');
const nextButton = document.querySelector('.carousel-next');
const prevButton = document.querySelector('.carousel-prev');
let currentIndex = 0;

function showCarouselItem(index) {
    carouselItems.forEach((item, i) => {
        item.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextCarouselItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showCarouselItem(currentIndex);
}

function prevCarouselItem() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showCarouselItem(currentIndex);
}

nextButton.addEventListener('click', nextCarouselItem);
prevButton.addEventListener('click', prevCarouselItem);

// Auto slide every 5 seconds
setInterval(nextCarouselItem, 5000);

// Initialize the carousel
showCarouselItem(currentIndex);