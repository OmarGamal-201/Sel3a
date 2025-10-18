
const products = [
    {
        id: 1,
        name: "Product One",
        description: "Description of product one.",
        price: 19.99,
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 2,
        name: "Product Two",
        description: "Description of product two.",
        price: 24.99,
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 3,
        name: "Product Three",
        description: "Description of product three.",
        price: 29.99,
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 4,
        name: "Product Four",
        description: "Description of product four.",
        price: 34.99,
        image: "https://via.placeholder.com/300x200"
    },
     {
        id: 5,
        name: "Product One",
        description: "Description of product one.",
        price: 19.99,
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 6,
        name: "Product Two",
        description: "Description of product two.",
        price: 24.99,
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 7,
        name: "Product Three",
        description: "Description of product three.",
        price: 29.99,
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 8,
        name: "Product Four",
        description: "Description of product four.",
        price: 34.99,
        image: "https://via.placeholder.com/300x200"
    },
      {
        id: 9,
        name: "Product Four",
        description: "Description of product four.",
        price: 34.99,
        image: "https://via.placeholder.com/300x200"
    },
     {
        id: 10,
        name: "Product One",
        description: "Description of product one.",
        price: 19.99,
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 11,
        name: "Product Two",
        description: "Description of product two.",
        price: 24.99,
        image: "https://via.placeholder.com/300x200"
    },
    {
        id: 12,
        name: "Product Three",
        description: "Description of product three.",
        price: 29.99,
        image: "https://via.placeholder.com/300x200"
    }
];


document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    
   
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
          
            console.log(`Navigating to: ${this.getAttribute('href')}`);
        });
    });
});


function renderProducts() {
    const productsContainer = document.getElementById('products-container');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-content">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
    
   
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            const originalText = this.textContent;
            this.textContent = 'Added!';
            this.style.backgroundColor = '#9A3B2B';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = '';
            }, 1000);
        });
    });
}