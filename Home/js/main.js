
const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Premium quality wireless headphones with noise cancellation.",
        price: 99.99,
        image: ""
    },
    {
        id: 2,
        name: "Smart Watch",
        description: "Feature-rich smartwatch with health monitoring.",
        price: 149.99,
        image: ""
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        description: "Portable Bluetooth speaker with 360° sound.",
        price: 79.99,
        image: ""
    },
    {
        id: 4,
        name: "Laptop Backpack",
        description: "Durable laptop backpack with multiple compartments.",
        price: 49.99,
        image: ""
    },
    {
        id: 5,
        name: "Phone Case",
        description: "Protective phone case with stylish design.",
        price: 24.99,
        image: ""
    },
    {
        id: 6,
        name: "Tablet Stand",
        description: "Adjustable tablet stand for comfortable viewing.",
        price: 29.99,
        image: ""
    },
    {
        id: 7,
        name: "Wireless Earbuds",
        description: "True wireless earbuds with charging case.",
        price: 89.99,
        image: ""
    },
    {
        id: 8,
        name: "Fitness Tracker",
        description: "Activity tracker with heart rate monitor.",
        price: 59.99,
        image: ""
    },
    {
        id: 9,
        name: "Portable Charger",
        description: "High-capacity portable charger for devices.",
        price: 39.99,
        image: ""
    },
    {
        id: 10,
        name: "Gaming Mouse",
        description: "Precision gaming mouse with RGB lighting.",
        price: 69.99,
        image: ""
    },
    {
        id: 11,
        name: "Mechanical Keyboard",
        description: "Mechanical keyboard with customizable keys.",
        price: 119.99,
        image: ""
    },
    {
        id: 12,
        name: "Webcam",
        description: "HD webcam with built-in microphone.",
        price: 49.99,
        image: ""
    }
];

document.addEventListener('DOMContentLoaded', function () {
    // Setup hamburger menu

    renderProducts()

});

function renderProducts() {
    const productsContainer = document.getElementById('products-container');

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
                    <div class="product-image">
                        ${product.name}
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

    // Add event listeners to Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Keep the same cart functionality as before
            const originalText = this.textContent;
            this.textContent = 'Added';
            this.style.backgroundColor = '#23b42fff';

            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 1000);
        });
    });
}

