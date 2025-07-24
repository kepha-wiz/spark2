const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox__image');
const lightboxCaption = document.querySelector('.lightbox__caption');
const lightboxClose = document.querySelector('.lightbox__close');

// Function to open the lightbox
function openLightbox(imageSrc, captionText) {
    lightboxImage.src = imageSrc;
    lightboxCaption.textContent = captionText;
    lightbox.classList.add('active');
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
}

// Event listener for closing the lightbox
lightboxClose.addEventListener('click', closeLightbox);

// Event listener for clicking on images to open the lightbox
document.querySelectorAll('.lightbox-trigger').forEach(item => {
    item.addEventListener('click', event => {
        const imageSrc = item.getAttribute('data-image');
        const captionText = item.getAttribute('data-caption');
        openLightbox(imageSrc, captionText);
    });
});

// Event listener for closing the lightbox when clicking outside the image
lightbox.addEventListener('click', event => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});