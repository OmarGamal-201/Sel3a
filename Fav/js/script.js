document.addEventListener('DOMContentLoaded', function () {
  displayFavorites();
  updateFavCount();
  updateCartCount();
  applyStyles();
});

//  عرض المنتجات المفضلة
function displayFavorites() {
  const favContainer = document.getElementById('favorites-container');
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  favContainer.innerHTML = '';

  if (favorites.length === 0) {
    favContainer.innerHTML = '<p>لا توجد منتجات مفضلة</p>';
    return;
  }

  favorites.forEach(item => {
    const favItem = document.createElement('div');
    favItem.className = 'item-card';
    favItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="item-info">
        <h3>${item.name}</h3>
        <p>السعر: <strong>$${item.price}</strong></p>
        <button class="checkout-single-btn">شراء هذا المنتج</button>
        <button class="remove-fav-btn">❌ إزالة من المفضلة</button>
      </div>
    `;
    favContainer.appendChild(favItem);
  });

  setupRemoveFavButtons();
  setupAddToCartButtons();
}

//  حذف منتج من المفضلة بعد تأكيد المستخدم
function setupRemoveFavButtons() {
  document.querySelectorAll('.remove-fav-btn').forEach(function (button) {
    button.addEventListener('click', function () {
      const card = button.closest('.item-card');
      const name = card.querySelector('h3').textContent;
      const confirmDelete = confirm('هل أنت متأكدة من إزالة هذا المنتج؟');
      if (confirmDelete) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites = favorites.filter(item => item.name !== name);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        displayFavorites();
        updateFavCount();
        showToast('✅ تم حذف المنتج من المفضلة');
      }
    });
  });
}

//  إضافة منتج للعربة من صفحة المفضلة
function setupAddToCartButtons() {
  document.querySelectorAll('.add-cart-btn').forEach(function (button) {
    button.addEventListener('click', function () {
      const card = button.closest('.item-card');
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
}

//  زر شراء منتج واحد
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('checkout-single-btn')) {
    showToast('✅ تم شراء هذا المنتج بنجاح!');
  }
});

//  تحديث عداد المفضلة
function updateFavCount() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const counter = document.getElementById('fav-count');
  if (counter) {
    counter.textContent = favorites.length;
  }
}

// تحديث عداد العربة
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const counter = document.querySelector('.cart-count');
  if (counter) {
    counter.textContent = `(${cart.length})`;
  }
}

// عرض رسالة مؤقتة (Toast)
function showToast(message) {
  const existingToast = document.querySelector('.toast-message');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.textContent = message;
  toast.className = 'toast-message';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ✅ البحث داخل المنتجات حسب العنوان
const searchInput = document.getElementById('search');
if (searchInput) {
  searchInput.addEventListener('input', function () {
    const value = this.value.toLowerCase();
    document.querySelectorAll('.item-card').forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = title.includes(value) ? 'flex' : 'none';
    });
  });
}
document.querySelectorAll('.add-fav-btn').forEach(button => {
  button.addEventListener('click', function () {
    const card = this.closest('.item-card');
    const name = card.querySelector('h3').textContent;
    const price = parseFloat(card.querySelector('p strong').textContent.replace('$', ''));
    const image = card.querySelector('img').getAttribute('src');

    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // تأكد إن المنتج مش مكرر
    const exists = favorites.some(item => item.name === name);
    if (exists) {
      showToast('❤️ المنتج موجود بالفعل في المفضلة');
      return;
    }

    favorites.push({ name, price, image });
    localStorage.setItem('favorites', JSON.stringify(favorites));

    updateFavCount();
    showToast('✅ تم إضافة المنتج إلى المفضلة');
  });
})
//
//  تنسيق الصفحة
function applyStyles() {
  document.body.style.fontFamily = "'Segoe UI', sans-serif";
  document.body.style.margin = "0";
  document.body.style.paddingTop = "80px";
  document.body.style.backgroundColor = "#f2f2f2";
  document.body.style.color = "#333";

  const header = document.querySelector(".main-header");
  if (header) {
    Object.assign(header.style, {
      position: "fixed",
      top: "0",
      right: "0",
      left: "0",
      backgroundColor: "#800020",
      color: "#fff",
      padding: "20px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      zIndex: "100"
    });
  }

  const logo = document.querySelector(".logo");
  if (logo) {
    Object.assign(logo.style, {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#fff",
      textDecoration: "none"
    });
  }

  const pageIcon = document.querySelector(".page-icon");
  if (pageIcon) {
    Object.assign(pageIcon.style, {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      fontSize: "20px"
    });
  }

  const icon = document.querySelector(".page-icon i");
  if (icon) icon.style.fontSize = "24px";

  const search = document.getElementById("search");
  if (search) {
    Object.assign(search.style, {
      width: "100%",
      maxWidth: "500px",
      padding: "10px 15px",
      fontSize: "16px",
      margin: "20px auto",
      display: "block",
      border: "1px solid #ccc",
      borderRadius: "6px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      backgroundColor: "#fff",
      color: "#333",
      boxSizing: "border-box"
    });
  }

  document.querySelectorAll(".item-card").forEach(card => {
    Object.assign(card.style, {
      backgroundColor: "#fff",
      border: "1px solid #ccc",
      borderRadius: "8px",
      display: "flex",
      gap: "15px",
      padding: "15px",
      marginBottom: "20px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)"
    });

    const img = card.querySelector("img");
    if (img) {
      img.style.width = "100px";
      img.style.height = "auto";
      img.style.borderRadius = "6px";
    }

    const title = card.querySelector("h3");
    if (title) {
      title.style.margin = "0 0 10px";
      title.style.fontSize = "18px";
      title.style.color = "#800020";
    }

    const desc = card.querySelector("p");
    if (desc) desc.style.margin = "5px 0";
  });

  const buttons = document.querySelectorAll(".action-btn, .checkout-btn, .checkout-single-btn, .remove-fav-btn");
  buttons.forEach(btn => {
    Object.assign(btn.style, {
      backgroundColor: "#800020",
      color: "#fff",
      border: "none",
      padding: "8px 12px",
      borderRadius: "4px",
      cursor: "pointer",
      marginTop: "10px",
      transition: "background 0.3s ease"
    });

    btn.addEventListener("mouseover", () => {
      btn.style.backgroundColor = "#a52a2a";
    });

    btn.addEventListener("mouseout", () => {
      btn.style.backgroundColor = "#800020";
    });
  });

  const checkoutBox = document.querySelector(".checkout-box");
  if (checkoutBox) {
    checkoutBox.style.textAlign = "right";
    checkoutBox.style.marginTop = "20px";
  }
}