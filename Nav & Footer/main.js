let cUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
const uname = cUser.firstName || 'Guest';
document.addEventListener('DOMContentLoaded', function () {
    // Setup hamburger menu
    setupLogout();
    createNav();
    setupHamburgerMenu();
    createFooter();
    let loc = document.location.pathname;
    console.log(loc);
    if (loc.includes('Login/login.html') || loc.includes('Signup/signup.html')) {
        var logout = document.querySelector('.logout');
        logout.style.display = 'none';
        let pf = document.querySelector('.prf');
        if (pf) pf.style.display = 'none';  // make sure element exists
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
            });
        });
    }
    var dash = document.querySelector('.dsh');
    if (dash) dash.style.display = 'none';
    if (cUser.email === 'admin@admin') {
        if (dash) dash.style.display = 'block';
    }
    else dash.style.display = 'none';

    
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
            <li><a href="../Products/product.html">products</a></li>
            <li><a href="../Contact Us/index.html">Contact</a></li>
            <li><a href="../cart/cart.html">Cart</a></li>
            <li><a href="../Fav/favourite.html">Fav</a></li>
            <li class="dsh"><a href="./../Admin Dashboard/index.html">DashBoard</a></li>
            <li class="prf"><a href="./../Profile/profile.html">Hi, ${uname}</a></li>
            <li class="logout"><a href="../Login/login.html">Log Out</a></li>
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

function setupLogout() {
    const logoutLink = document.querySelector('.logout');
    if (logoutLink) {
        logoutLink.addEventListener('click', function (e) {
            localStorage.removeItem('currentUser'); // clear saved user
            e.preventDefault(); // stop normal link navigation
            window.location.href = '../Login/login.html'; // redirect
        });
    }
}