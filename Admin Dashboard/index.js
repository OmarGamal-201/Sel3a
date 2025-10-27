// ------------------- البحث في المنتجات -------------------
const searchInput = document.getElementById("searchInput");
const tableBody = document.querySelector("tbody");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const tableRows = document.querySelectorAll("tbody tr");

    tableRows.forEach((row) => {
      const productName = row
        .querySelector(".name-price")
        .textContent.toLowerCase();
      const price = row.querySelector(".price").textContent.toLowerCase();

      row.style.display =
        productName.includes(query) || price.includes(query) ? "" : "none";
    });
  });
}

// ------------------- البيانات والجدول -------------------
let products = [];

// نحاول نجيب البيانات من localStorage
const savedProducts = localStorage.getItem("products");

if (savedProducts) {
  products = JSON.parse(savedProducts);
} else {
  console.warn("لا توجد بيانات منتجات في Local Storage.");
  products = [];
}

// دالة الحفظ في Local Storage
function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

// دالة عرض الجدول
function renderTable() {
  if (!tableBody) return;
  tableBody.innerHTML = "";
  products.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><span class="image-table"><img src="${product.image}" alt=""></span></td>
      <td><span class="name-price">${product.name}</span></td>
      <td><span class="price">${product.price}</span></td>
      <td><i class="fa-solid fa-pencil"></i> <i class="fa-solid fa-trash-can"></i></td>
    `;
    tableBody.appendChild(row);
  });
  updateProductCount();
}

// ------------------- تحديث عدد المنتجات -------------------
const countSpan3 = document.querySelector(".count3");

function updateProductCount() {
  if (!countSpan3) return;
  countSpan3.textContent = products.length;
}

// أول استدعاء
renderTable();

// ------------------- مودال التعديل -------------------
const editModal = document.getElementById("editModal");
const editName = document.getElementById("editName");
const editPrice = document.getElementById("editPrice");
const editImage = document.getElementById("editImage");
const saveEdit = document.getElementById("saveEdit");
const cancelEdit = document.getElementById("cancelEdit");
let currentIndex = null;

if (tableBody) {
  tableBody.addEventListener("click", (e) => {
    const row = e.target.closest("tr");
    if (!row) return;
    const index = Array.from(tableBody.children).indexOf(row);

    // ---- حذف ----
    if (e.target.classList.contains("fa-trash-can")) {
      if (confirm("هل أنت متأكد أنك تريد حذف المنتج؟")) {
        products.splice(index, 1);
        saveProducts();
        renderTable();
      }
    }

    // ---- تعديل ----
    if (e.target.classList.contains("fa-pencil")) {
      const product = products[index];
      currentIndex = index;
      editName.value = product.name;
      editPrice.value = product.price;
      editImage.value = product.image;
      editModal.style.display = "flex";
    }
  });
}

if (saveEdit) {
  saveEdit.addEventListener("click", () => {
    if (currentIndex === null) return;
    products[currentIndex] = {
      name: editName.value.trim(),
      price: editPrice.value.trim(),
      image: editImage.value.trim(),
    };
    saveProducts();
    renderTable();
    editModal.style.display = "none";
  });
}

if (cancelEdit) {
  cancelEdit.addEventListener("click", () => {
    editModal.style.display = "none";
  });
}

// ------------------- القائمة الجانبية -------------------
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      menu.classList.add("closing");
      setTimeout(() => menu.classList.remove("closing"), 400);
    } else {
      menu.classList.add("active");
    }
  });
}

// ------------------- عداد المستخدمين -------------------
const signInBtn = document.getElementById("sign-in");
const userCountCount = document.querySelector(".count");
let users = JSON.parse(localStorage.getItem("users")) || 0;
let userCount = users.length;

if (userCountCount) userCountCount.textContent = userCount;

if (signInBtn) {
  signInBtn.addEventListener("click", () => {
    userCount++;
    userCountCount.textContent = userCount;
    localStorage.setItem("userCount", userCount);
  });
}

// ------------------- عرض الرسائل في Dashboard -------------------
const showMessagesBtn = document.getElementById("showMessages");
const messagesModal = document.getElementById("messagesModal");
const messagesList = document.getElementById("messagesList");
const closeMessages = document.getElementById("closeMessages");

if (showMessagesBtn) {
  showMessagesBtn.addEventListener("click", () => {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messagesList.innerHTML = "";

    if (messages.length === 0) {
      messagesList.innerHTML = "<p>📭 لا توجد رسائل بعد</p>";
    } else {
      messages.forEach((msg) => {
        const div = document.createElement("div");
        div.classList.add("message-item");
        div.innerHTML = `
          <p><strong>👤 الاسم:</strong> ${msg.name}</p>
          <p><strong>📧 الإيميل:</strong> ${msg.email}</p>
          <p><strong>💬 الرسالة:</strong> ${msg.message}</p>
          <p><small>${msg.date}</small></p>
          <hr>
        `;
        messagesList.appendChild(div);
      });
    }

    messagesModal.style.display = "flex";
  });
}

if (closeMessages) {
  closeMessages.addEventListener("click", () => {
    messagesModal.style.display = "none";
  });
}
