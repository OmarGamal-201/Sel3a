//  تبديل الوضع الليلي
const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  modeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
}

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    modeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    modeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem("theme", "light");
  }
});

//  أنيميشن عند تحميل الصفحة
window.addEventListener("load", () => {
  const menu = document.querySelector(".menu");
  const boxes = document.querySelectorAll(".data-info .box");
  const table = document.querySelector(".table-container");

  menu.style.animationDelay = "0s";

  boxes.forEach((box, index) => {
    box.style.animationDelay = `${0.5 + index * 0.2}s`;
  });

  table.style.animationDelay = `${0.5 + boxes.length * 0.2}s`;
});

//  البحث في المنتجات
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const tableRows = document.querySelectorAll("tbody tr");

  tableRows.forEach((row) => {
    const productName = row
      .querySelector(".name-price")
      .textContent.toLowerCase();
    const price = row.querySelector(".price").textContent.toLowerCase();

    if (productName.includes(query) || price.includes(query)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

//  جلب الجدول والمنتجات
const tableBody = document.querySelector("tbody");

let products = JSON.parse(localStorage.getItem("products")) || [
  {
    name: "name Price",
    price: "$999",
    image: "./image/81e77237f75c438083efe1b19b9084d2.jpg",
  },
  {
    name: "name Price",
    price: "$999",
    image: "./image/81e77237f75c438083efe1b19b9084d2.jpg",
  },
];

//  دالة عرض البيانات في الجدول
function renderTable() {
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
}

//  حفظ في localStorage
function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

// أول تحميل
renderTable();

//  حذف وتعديل
const editModal = document.getElementById("editModal");
const editName = document.getElementById("editName");
const editPrice = document.getElementById("editPrice");
const editImage = document.getElementById("editImage");
const saveEdit = document.getElementById("saveEdit");
const cancelEdit = document.getElementById("cancelEdit");

let currentIndex = null;

tableBody.addEventListener("click", (e) => {
  const row = e.target.closest("tr");
  if (!row) return;
  const index = Array.from(tableBody.children).indexOf(row);

  // ---- الحذف ----
  if (e.target.classList.contains("fa-trash-can")) {
    const confirmDelete = confirm(`هل أنت متأكد أنك تريد حذف المنتج؟`);
    if (confirmDelete) {
      products.splice(index, 1);
      saveProducts();
      renderTable();
    }
  }

  // ---- التعديل ----
  if (e.target.classList.contains("fa-pencil")) {
    const product = products[index];
    currentIndex = index;
    // عرض البيانات في المودال
    editName.value = product.name;
    editPrice.value = product.price;
    editImage.value = product.image;

    editModal.style.display = "flex";
  }
});

//  حفظ التعديل
saveEdit.addEventListener("click", () => {
  if (currentIndex === null) return;

  products[currentIndex].name = editName.value.trim();
  products[currentIndex].price = editPrice.value.trim();
  products[currentIndex].image = editImage.value.trim();

  saveProducts();
  renderTable();
  editModal.style.display = "none";
});

//  إلغاء التعديل
cancelEdit.addEventListener("click", () => {
  editModal.style.display = "none";
});

//  القائمة الجانبية
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    menu.classList.add("closing");
    setTimeout(() => menu.classList.remove("closing"), 400);
  } else {
    menu.classList.add("active");
  }
});
