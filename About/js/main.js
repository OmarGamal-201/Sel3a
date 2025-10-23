
const images = [
    './imgs/about.jpg',
    './imgs/about1.jpg',
    './imgs/about2.jpg',
    './imgs/about3.jpg',
    './imgs/about4.jpg',
];

let currentimageindex = 0;

function changeimage() {
    currentimageindex = (currentimageindex + 1) % images.length;
    document.getElementById('mainimage').src = images[currentimageindex];
}

// Auto change image every 3 seconds
setInterval(changeimage, 3000);

// Setup hamburger menu
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function () {
    setupHamburgerMenu();
});