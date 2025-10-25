// حذف منتج من المفضلة بعد تأكيد المستخدم
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

// حذف منتج من العربة بعد تأكيد المستخدم
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

// زر الشراء لجميع المنتجات
const checkoutButton = document.querySelector('.checkout-btn');
if (checkoutButton) {
  checkoutButton.addEventListener('click', function() {
    alert('✅ تم إتمام الشراء بنجاح! شكراً لاستخدامك Sel3a');
  });
}

// زر شراء منتج واحد
document.querySelectorAll('.checkout-single-btn').forEach(function(button) {
  button.addEventListener('click', function() {
    showToast('✅ تم شراء هذا المنتج بنجاح!');
  });
});

// تحديث عداد المفضلة
function updateFavCount() {
  const count = document.querySelectorAll('.item-card .remove-fav-btn').length;
  const counter = document.getElementById('fav-count');
  if (counter) {
    counter.textContent = count;
  }
}

// عرض رسالة مؤقتة (Toast)
function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.className = 'toast-message';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// البحث داخل المنتجات حسب العنوان
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

// style
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

applyStyles();
