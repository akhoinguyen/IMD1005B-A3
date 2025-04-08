function WowClick() {
    const button = document.querySelector('.wow-btn');
    if (!button) return;

    // Add class and change text
    document.body.classList.add('wow-clicked');
    const originalText = button.innerText;
    button.innerText = 'Thanksss! :)';

    // After 2 seconds, revert changes
    setTimeout(() => {
        document.body.classList.remove('wow-clicked');
        button.innerText = originalText;
    }, 2000);
}

// Lightbox gallery

const $lightboxGallery = document.getElementById('lightbox-gallery');
const $lightboxBtn = document.getElementById('lightbox-btn');

console.log(document.getElementById('lightbox-gallery'));

if ($lightboxGallery) {

    const lightboxOverlay = document.querySelector('.lightbox-overlay');
    const lightboxExitBtn = document.getElementById('lightbox-btn');

    // Open lightbox
    $lightboxGallery.addEventListener('click', (event) => {
        const clickedLightbox = event.target.closest('.gallery-item');

        if (clickedLightbox) {
            clickedLightbox.classList.add('lightbox');
            // clickedLightbox.style.height = ''; // Overrride custom height: 100% when out of lightbox

            if (lightboxOverlay) {
                lightboxOverlay.style.display = 'block';
                lightboxExitBtn.style.display = 'block';
            }
        }
    });

    // Close lightbox when hitting Esc
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            const lightboxActive = document.querySelector('.gallery-item.lightbox');
            if (lightboxActive) {
                lightboxActive.classList.remove('lightbox');
            }
            if (lightboxOverlay) {
                lightboxOverlay.style.display = 'none';
                lightboxExitBtn.style.display = 'none';
                console.log(lightboxExitBtn);
            }
        }
    });

    // Close lightbox when clicking Exit button
    if ($lightboxBtn) {
        $lightboxBtn.addEventListener('click', () => {
            const lightboxActive = document.querySelector('.gallery-item.lightbox');
            if (lightboxActive) {
                lightboxActive.classList.remove('lightbox');
            }
            if (lightboxOverlay) {
                lightboxOverlay.style.display = 'none';
                lightboxExitBtn.style.display = 'none';
                console.log(lightboxExitBtn);
            }
        });
    }
}
