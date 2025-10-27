// ✅ تحميل المنتجات من localStorage أو إنشاءها أول مرة
let products = JSON.parse(localStorage.getItem("products"));

// لو مفيش منتجات في localStorage، نحفظ المنتجات الافتراضية
if (!products || products.length === 0) {
  products = [
    {
      id: 1,
      brandName: "Samsung",
      name: "Smart Watch",
      price: "$45",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
      description:
        "Advanced smart watch with AMOLED display and water resistance",
      category: "Electronics",
    },
    {
      id: 2,
      brandName: "Sony",
      name: "Bluetooth Headphones",
      price: "$25",
      image:
        "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=500&q=80",
      description: "High quality Bluetooth headphones with crystal clear sound",
      category: "Electronics",
    },
    {
      id: 3,
      brandName: "Ray-Ban",
      name: "Sunglasses",
      price: "$30",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=80",
      description: "Stylish sunglasses with UV protection",
      category: "Accessories",
    },
    {
      id: 4,
      brandName: "Gucci",
      name: "Leather Bag",
      price: "$60",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80",
      description: "Luxury leather bag with modern design",
      category: "Bags",
    },
    // {
    //   id: 5,
    //   brandName: "Canon",
    //   name: "Digital Camera",
    //   price: "$120",
    //   image:
    //     "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80",
    //   description: "Professional camera with high resolution",
    //   category: "Electronics",
    // },
    // {
    //   id: 6,
    //   brandName: "Nike",
    //   name: "Sports Shoes",
    //   price: "$50",
    //   image:
    //     "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80",
    //   description: "Comfortable sports shoes for running and workouts",
    //   category: "Shoes",
    // },
  ];

  // نحفظها في localStorage أول مرة
  localStorage.setItem("products", JSON.stringify(products));
}

// ✅ بعد تحميل أو إنشاء المنتجات
document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('#product-list');
    console.log('started loading')
  // لو مفيش منتجات نعرض رسالة
  if (!products || products.length === 0) {
    console.log('Noooooooooooooooooooooooo');
    container.innerHTML = "<p>No items.</p>";
    // return;
  }

  // إنشاء الكروت
  products.forEach((product, index) => {
    const card = createProductCard(product, index);
    container.appendChild(card);
  });

  setupProductFunctionality();
  linkingProducts();
  updateCartCount();
  updateFavCount();
  // setupHamburgerMenu();
});

//  وظائف المنتجات
function setupProductFunctionality() {
  const addToCartButtons = document.querySelectorAll(".add-cart-btn");
  const favoriteButtons = document.querySelectorAll(".fav-toggle-btn");

  // إضافة إلى العربة
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation();

      const card = this.closest(".item-card");
      const name = card.querySelector("h3").textContent;
      const price = parseFloat(
        card.querySelector("p strong").textContent.replace("$", "")
      );
      const image = card.querySelector("img").getAttribute("src");

      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push({ name, price, image });
      localStorage.setItem("cart", JSON.stringify(cart));

      updateCartCount();
      showToast("product moved to cart");
    });
  });

  // إضافة أو إزالة من المفضلة
  favoriteButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.stopPropagation();

      const card = this.closest(".item-card");
      const name = card.querySelector("h3").textContent;
      const price = parseFloat(
        card.querySelector("p strong").textContent.replace("$", "")
      );
      const image = card.querySelector("img").getAttribute("src");

      const favs = JSON.parse(localStorage.getItem("favorites")) || [];
      const index = favs.findIndex((item) => item.name === name);

      if (index === -1) {
        favs.push({ name, price, image });
        localStorage.setItem("favorites", JSON.stringify(favs));
        this.innerHTML = "removed from cart   ";
        showToast("product add to fav");
      } else {
        favs.splice(index, 1);
        localStorage.setItem("favorites", JSON.stringify(favs));
        this.innerHTML = "add to fav";
        showToast("product remove from fav   ");
      }

      updateFavCount();
    });
  });
}

//  تحديث عداد العربة
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const countElement = document.querySelector(".cart-count");
  if (countElement) {
    countElement.textContent = `(${cart.length})`;
  }
}

//  تحديث عداد المفضلة
function updateFavCount() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const countElement = document.querySelector(".fav-count");
  if (countElement) {
    countElement.textContent = `(${favorites.length})`;
  }
}

//  رسالة تأكيد
function showToast(message) {
  const existingToast = document.querySelector(".toast-message");
  if (existingToast) existingToast.remove();

  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

//  إنشاء كارت منتج
function createProductCard(product, index) {
  const card = document.createElement("div");
  card.className = "item-card";
  card.dataset.productIndex = index;
  card.style.cursor = "pointer";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="item-info">
      <h3>${product.name}</h3>
      <p>السعر: <strong>${product.price}</strong></p>
      <button class="add-cart-btn">add to cart</button>
      <button class="fav-toggle-btn">add to fav</button>
    </div>
  `;

  return card;
}

//  ربط المنتجات بصفحة التفاصيل
function linkingProducts() {
  const productCards = document.querySelectorAll(".item-card");

  productCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      if (e.target.tagName === "BUTTON") return;

      const productIndex = parseInt(this.dataset.productIndex);
      const selectedProduct = products[productIndex];

      localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
      window.location.href = "../product/product.html";
    });
  });
}
