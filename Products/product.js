// ✅ بيانات المنتجات
const products = [
  {
    title: "ساعة ذكية",
    price: "$45",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "سماعة بلوتوث",
    price: "$25",
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "نظارة شمس",
    price: "$30",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "حقيبة جلد",
    price: "$60",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "كاميرا رقمية",
    price: "$120",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "حذاء رياضي",
    price: "$50",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
  }
];

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById("product-list");
  products.forEach(product => {
    const card = createProductCard(product);
    container.appendChild(card);
  });

  setupProductFunctionality();
  updateCartCount();
  updateFavCount();
  setupSearch();
  setupHamburgerMenu();
});

//  وظائف المنتجات
function setupProductFunctionality() {
  const addToCartButtons = document.querySelectorAll('.add-cart-btn');
  const favoriteButtons = document.querySelectorAll('.fav-toggle-btn');

  // إضافة إلى العربة
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const card = this.closest('.item-card');
      const name = card.querySelector('h3').textContent;
      const price = parseFloat(card.querySelector('p strong').textContent.replace('$', ''));
      const image = card.querySelector('img').getAttribute('src');

      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push({ name, price, image });
      localStorage.setItem('cart', JSON.stringify(cart));

      updateCartCount();
      showToast('🛒 تمت إضافة المنتج إلى العربة');
    });
  });

  // إضافة أو إزالة من المفضلة
  favoriteButtons.forEach(button => {
    button.addEventListener('click', function () {
      const card = this.closest('.item-card');
      const name = card.querySelector('h3').textContent;
      const price = parseFloat(card.querySelector('p strong').textContent.replace('$', ''));
      const image = card.querySelector('img').getAttribute('src');

      const favs = JSON.parse(localStorage.getItem('favorites')) || [];
      const index = favs.findIndex(item => item.name === name);

      if (index === -1) {
        favs.push({ name, price, image });
        localStorage.setItem('favorites', JSON.stringify(favs));
        this.innerHTML = '❌ إزالة من المفضلة';
        showToast('❤️ تمت إضافة المنتج إلى المفضلة');
      } else {
        favs.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(favs));
        this.innerHTML = '❤️ إضافة للمفضلة';
        showToast('❌ تمت إزالة المنتج من المفضلة');
      }

      updateFavCount();
    });
  });

  // زر الشراء الفردي
  document.querySelectorAll('.checkout-single-btn').forEach(button => {
    button.addEventListener('click', function () {
      showToast('✅ تم شراء هذا المنتج بنجاح!');
    });
  });
}

//  تحديث عداد العربة
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const countElement = document.querySelector('.cart-count');
  if (countElement) {
    countElement.textContent = `(${cart.length})`;
  }
}

//  تحديث عداد المفضلة
function updateFavCount() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const countElement = document.querySelector('.fav-count');
  if (countElement) {
    countElement.textContent = `(${favorites.length})`;
  }
}

//  وظيفة البحث
function setupSearch() {
  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const products = document.querySelectorAll('#product-list .item-card');

    products.forEach(product => {
      const title = product.querySelector('h3').textContent.toLowerCase();
      product.style.display = title.includes(searchTerm) ? 'flex' : 'none';
    });
  });
}

//  قائمة الهامبرجر
function setupHamburgerMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
}

//  رسالة تأكيد
function showToast(message) {
  const existingToast = document.querySelector('.toast-message');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

//  إنشاء كارت منتج
function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "item-card";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <div class="item-info">
      <h3>${product.title}</h3>
      <p>السعر: <strong>${product.price}</strong></p>
      <button class="add-cart-btn">🛒 إضافة إلى العربة</button>
      <button class="fav-toggle-btn">❤️ إضافة للمفضلة</button>
    </div>
  `;

  return card;
}