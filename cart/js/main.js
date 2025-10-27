document.addEventListener('DOMContentLoaded', function () {
 
  if (document.getElementById('favorites-container')) {
    displayFavorites();
    updateFavCount();
    updateCartCount();
    applyStyles();
  }

  
  if (document.getElementById('cart-items-container')) {
    displayCartItems();
    updateTotalPrice();
  }
});

// عرض المنتجات المفضلة
function displayFavorites() {
  const favContainer = document.getElementById('favorites-container');
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  favContainer.innerHTML = '';
if (favorites.length === 0) {
  favContainer.innerHTML = `
    <p class="empty-favorites">
    No items found
          </p>
  `;
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
        <button class="add-to-cart-btn"> add to cart</button>
        <button class="remove-fav-btn"> delete from Fav </button>
      </div>
    `;
    favContainer.appendChild(favItem);
  });

  setupRemoveFavButtons();
  setupAddToCartButtons();
}

// حذف منتج من المفضلة
function setupRemoveFavButtons() {
  document.querySelectorAll('.remove-fav-btn').forEach(function (button) {
    button.addEventListener('click', function () {
      const card = button.closest('.item-card');
      const name = card.querySelector('h3').textContent;
      showConfirm('Wanna delete this item?', () => {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites = favorites.filter(item => item.name !== name);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        displayFavorites();
        updateFavCount();
        showToast('✅Remove from Fav');
      });
    });
  });
}

// إضافة منتج إلى العربة
function setupAddToCartButtons() {
  document.querySelectorAll('.add-to-cart-btn').forEach(function (button) {
    button.addEventListener('click', function () {
      const card = button.closest('.item-card');
      const name = card.querySelector('h3').textContent;
      const price = parseFloat(card.querySelector('p strong').textContent.replace('$', ''));
      const image = card.querySelector('img').getAttribute('src');

      const cart = JSON.parse(localStorage.getItem('cart')) || [];

      const exists = cart.some(item => item.name === name);
      if (exists) {
        showToast('🛒 Item alredy exist');
        return;
      }

      cart.push({ name, price, image, quantity: 1 });
      localStorage.setItem('cart', JSON.stringify(cart));

      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      favorites = favorites.filter(item => item.name !== name);
      localStorage.setItem('favorites', JSON.stringify(favorites));

      displayFavorites();
      updateFavCount();
      updateCartCount();
      showToast('✅ The product has been moved to the cart');
    });
  });
}

// تحديث عداد المفضلة
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

// عرض رسالة مؤقتة
function showToast(message) {
  const existingToast = document.querySelector('.toast-message');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.textContent = message;
  toast.className = 'toast-message';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// مربع التأكيد
function showConfirm(message, onYes) {
  const existing = document.querySelector('.confirm-toast');
  if (existing) existing.remove();

  const box = document.createElement('div');
  box.className = 'confirm-toast';
  box.style.direction = 'ltr';

  box.innerHTML = `
    <p>${message}</p>
    <div class="confirm-buttons">
      <button id="confirm-yes">ok</button>
      <button id="confirm-no">cancel</button>
    </div>
  `;

  document.body.appendChild(box);
  setTimeout(() => box.classList.add('show'), 10);

  document.getElementById('confirm-yes').onclick = () => {
    box.classList.remove('show');
    setTimeout(() => box.remove(), 300);
    onYes();
  };

  document.getElementById('confirm-no').onclick = () => {
    box.classList.remove('show');
    setTimeout(() => box.remove(), 300);
  };
}//

function showBuyToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast-message'; // 
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2500);  
}

// تعديل الدالة
function setupBuyItemButtons() {
  document.querySelectorAll('.buy-item-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const item = cart[index];
      showBuyToast(` You bought: ${item.name} for $${item.price}`);
    });
  });
}

// عرض المنتجات داخل العربة
function displayCartItems() {
  const container = document.getElementById('cart-items-container');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const checkoutBox = document.querySelector('.checkout-box');
  const buyAllBtn = document.querySelector('.buy-all-btn');
  const removeAllBtn = document.querySelector('.remove-all-btn');

  container.innerHTML = '';

  if (cart.length === 0) {
    container.innerHTML = '<p class="empty-cart"> cart is empty</p>';
    checkoutBox.style.display = 'none'; // 
    return;
  } else {
    checkoutBox.style.display = 'block'; 
  }

  cart.forEach((item, index) => {
    const quantity = item.quantity || 1;
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="item-info">
        <h3>${item.name}</h3>
        <p>السعر: <strong>$${item.price}</strong></p>
        <div class="quantity-controls">
          <button class="decrease-btn" data-index="${index}">-</button>
          <span class="quantity">${quantity}</span>
          <button class="increase-btn" data-index="${index}">+</button>
        </div>
        <button class="buy-item-btn">Buy item</button>
        <button class="remove-cart-btn">Remove from cart</button>
      </div>
    `;

    container.appendChild(card);
  });

  setupRemoveCartButtons();
  setupQuantityButtons();
  setupBuyItemButtons();  
}


// حذف منتج من العربة
function setupRemoveCartButtons() {
  document.querySelectorAll('.remove-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
      const card = button.closest('.item-card');
      const name = card.querySelector('h3').textContent;

      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart = cart.filter(item => item.name !== name);
      localStorage.setItem('cart', JSON.stringify(cart));

      displayCartItems();
      updateTotalPrice();
      showToast('🗑️ Item successfully removed from cart');
    });
  });
}

// التحكم في الكمية
function setupQuantityButtons() {
  document.querySelectorAll('.increase-btn').forEach(button => {
    button.addEventListener('click', function () {
      const index = this.dataset.index;
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart[index].quantity = (cart[index].quantity || 1) + 1;
      localStorage.setItem('cart', JSON.stringify(cart));
      displayCartItems();
      updateTotalPrice();
    });
  });

  document.querySelectorAll('.decrease-btn').forEach(button => {
    button.addEventListener('click', function () {
      const index = this.dataset.index;
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart[index].quantity = Math.max(1, (cart[index].quantity || 1) - 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      displayCartItems();
      updateTotalPrice();
    });
  });
}

// حساب السعر الإجمالي
function updateTotalPrice() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
}
const removeAllBtn = document.querySelector('.remove-all-btn');
if (removeAllBtn) {
  removeAllBtn.addEventListener('click', function () {
    showConfirm('Are you sure you want to remove all items from the cart?', () => {
      localStorage.removeItem('cart');
      displayCartItems();
      updateTotalPrice();
      showToast('🗑️ All items removed from cart');
    });
  });
}
const buyAllBtn = document.querySelector('.buy-all-btn');
if (buyAllBtn) {
  buyAllBtn.addEventListener('click', function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
      showToast('🛒 Your cart is empty');
      return;
    }

    showConfirm(`Do you want to buy all ${cart.length} items?`, () => {
      localStorage.removeItem('cart');
      displayCartItems();
      updateTotalPrice();
      updateCartCount();
      showToast(' Purchase completed successfully');
    });
  });
}
