let cUser = JSON.parse(localStorage.getItem('currentUser') || '[]');
const uname = cUser.firstName || 'Guest';
document.addEventListener('DOMContentLoaded', function () {
    // Setup hamburger menu
    createNav();
    setupHamburgerMenu();
    createFooter();
    
    
});
console.log(uname);
//create NavBar
function createNav() {
    const nav = document.querySelector('nav');
    nav.innerHTML = `<!-- Navigation -->
    <div class="nav-container">
    <div class="logo-section">
    <img src="" alt="sel3a Logo" class="logo-img">
                <div class="logo-text">SEL3A</div>
            </div>
            <!-- Hamburger Menu Icon -->
            <div class="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
            </div>
            <ul class="nav-menu" id="nav-menu">
            <li><a href="../Home/home.html">Home</a></li>
            <li><a href="../About/about.html">About</a></li>
            <li><a href="#menu">products</a></li>
            <li><a href="../Contact Us/index.html">Contact</a></li>
            <li><a href="../cart/cart.html">Cart</a></li>
            <li><a href="../Fav/favourite.html">Fav</a></li>
            <li><a href="./../Profile/profile.html">Hi, ${uname}</a></li>
            </ul>
        </div>`
}

//Create Footer
function createFooter() {
    const footer = document.querySelector('footer');
    footer.innerHTML = `<div class="footer-logo">
    <img src="" alt="sel3a Logo" class="footer-logo-img">
    <h3>SEL3A</h3>
    </div>
    <div class="social-links">
    <a href="#"><i class="fab fa-facebook"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-instagram"></i></a>
    <a href="#"><i class="fab fa-snapchat"></i></a>
    </div>
    <p class="copyright">© 2025 Sel3a Website. All Rights Reserved.</p>`
}
// Function to setup hamburger menu
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