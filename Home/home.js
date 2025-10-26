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

    // إضافة event listeners لأزرار Add to Cart
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const originalText = e.target.textContent;
            e.target.textContent = 'Added';
            e.target.style.backgroundColor = '#23b42fff';

            setTimeout(() => {
                e.target.textContent = originalText;
                e.target.style.backgroundColor = '';
            }, 1000);
        }
    });
});


