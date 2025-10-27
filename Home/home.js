// Carousel Auto-rotation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel with auto-rotation
    const myCarousel = document.getElementById('mainCarousel');
    if (myCarousel) {
        const carousel = new bootstrap.Carousel(myCarousel, {
            interval: 5000, // Rotate every 5 seconds
            wrap: true,
            pause: 'hover'
        });
    }

    // Your existing code...
    storeProducts();
    renderProducts();
    setupHamburgerMenu();
});


