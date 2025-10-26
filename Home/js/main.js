const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Premium quality wireless headphones with noise cancellation.",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        detailPage: "headphones-details.html"
    },
    {
        id: 2,
        name: "Smart Watch",
        description: "Feature-rich smartwatch with health monitoring.",
        price: 149.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        detailPage: "watch-details.html"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with 360° sound.",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        detailPage: "speaker-details.html"
    },
    {
        id: 4,
        name: "Laptop Backpack",
        description: "Durable laptop backpack with multiple compartments.",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        detailPage: "backpack-details.html"
    },
    {
        id: 5,
        name: "Luxury Sofa",
        description: "Premium sofa with elegant design and comfortable seating for living room",
        price: 2499.99,
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        detailPage: "sofa-details.html"
    },
    {
        id: 6,
        name: "Tablet Stand",
        description: "Adjustable tablet stand for comfortable viewing.",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        detailPage: "tabletstand-details.html"
    },
    {
        id: 7,
        name: "Coffee Table",
        description: "High-quality wooden coffee table with elegant design",
        price: 499.99,
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        detailPage: "coffeetable-details.html"
    },
    {
        id: 8,
        name: "Fitness Tracker",
        description: "Activity tracker with heart rate monitor.",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        detailPage: "fitnesstracker-details.html"
    },
    {
        id: 9,
        name: "Entryway Bench",
        description: "Elegant bench for home entryway with additional storage",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        detailPage: "bench-details.html"
    },
    {
        id: 10,
        name: "Gaming Mouse",
        description: "Precision gaming mouse with RGB lighting.",
        price: 69.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        detailPage: "gamingmouse-details.html"
    },
    {
        id: 11,
        name: "Mechanical Keyboard",
        description: "Mechanical keyboard with customizable keys.",
        price: 119.99,
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        detailPage: "keyboard-details.html"
    },
    {
        id: 12,
        name: "Webcam",
        description: "HD webcam with built-in microphone.",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
        detailPage: "webcam-details.html"
    }
];
// تخزين المنتجات في Local Storage
function storeProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

// استرجاع المنتجات من Local Storage
function getProducts() {
    const storedProducts = localStorage.getItem('products');
    return storedProducts ? JSON.parse(storedProducts) : products;
}

function renderProducts() {
    const productsContainer = document.getElementById('products-container');
    const productsToRender = getProducts();
    
    productsContainer.innerHTML = ''; // تنظيف الحاوية أولاً
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';

        productCard.innerHTML = `
            <div class="product-image">
                <a href="${product.detailPage}?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}" />
                </a>
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;

        productsContainer.appendChild(productCard);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // تخزين المنتجات عند التحميل الأول
    storeProducts();
    
    // عرض المنتجات
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