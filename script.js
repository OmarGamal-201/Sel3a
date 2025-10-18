
// اللى عملته: حذف عنصر – تأكيد قبل الحذف – عداد – رسالة تأكيد – بحث

document.querySelectorAll('.remove-fav-btn').forEach(function(button) {
  button.addEventListener('click', function() {
    const item = button.closest('.item-card');
    const confirmDelete = confirm('هل أنت متأكدة من إزالة هذا المنتج؟');
    if (confirmDelete) {
      item.remove();
      updateFavCount();
      showToast('✅ تم حذف المنتج من المفضلة');
    }
  });
});

document.querySelectorAll('.cart-item .action-btn').forEach(function(button) {
  button.addEventListener('click', function() {
    const item = button.closest('.cart-item');
    const confirmDelete = confirm('هل تريد إزالة هذا المنتج من العربة؟');
    if (confirmDelete) {
      item.remove();
      showToast('🛒 تم حذف المنتج من العربة');
    }
  });
});

const checkoutButton = document.querySelector('.checkout-btn');
if (checkoutButton) {
  checkoutButton.addEventListener('click', function() {
    alert('✅ تم إتمام الشراء بنجاح! شكراً لاستخدامك Sel3a');
  });
}

function updateFavCount() {
  const count = document.querySelectorAll('.item-card .remove-fav-btn').length;
  const counter = document.getElementById('fav-count');
  if (counter) {
    counter.textContent = count;
  }
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.className = 'toast-message';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

const searchInput = document.getElementById('search');
if (searchInput) {
  searchInput.addEventListener('input', function() {
    const value = this.value.toLowerCase();
    document.querySelectorAll('.item-card').forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = title.includes(value) ? 'flex' : 'none';
    });
  });
}