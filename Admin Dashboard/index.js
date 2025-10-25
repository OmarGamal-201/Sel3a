// ------------------- تبديل الوضع الليلي -------------------
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

// ------------------- البحث في المنتجات -------------------
const searchInput = document.getElementById("searchInput");
const tableBody = document.querySelector("tbody");

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

// ------------------- البيانات والجدول -------------------
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

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(products));
}

renderTable();

// ------------------- مودال التعديل -------------------
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

cancelEdit.addEventListener("click", () => {
  editModal.style.display = "none";
});

// ------------------- مودال الإضافة -------------------
const addProductBtn = document.getElementById("addProductBtn");
const addModal = document.getElementById("addModal");
const addName = document.getElementById("addName");
const addPrice = document.getElementById("addPrice");
const addImage = document.getElementById("addImage");
const saveAdd = document.getElementById("saveAdd");
const cancelAdd = document.getElementById("cancelAdd");

addProductBtn.addEventListener("click", () => {
  addModal.style.display = "flex";
  addName.value = "";
  addPrice.value = "";
  addImage.value = "";
});

saveAdd.addEventListener("click", () => {
  const newProduct = {
    name: addName.value.trim() || "بدون اسم",
    price: addPrice.value.trim() || "$0",
    image:
      addImage.value.trim() || "./image/81e77237f75c438083efe1b19b9084d2.jpg",
  };
  products.push(newProduct);
  saveProducts();
  renderTable();
  addModal.style.display = "none";
});

cancelAdd.addEventListener("click", () => {
  addModal.style.display = "none";
});

// ------------------- القائمة الجانبية -------------------
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

// ------------------- عداد المستخدمين -------------------
const signInBtn = document.getElementById("sign-in");
const userCountCount = document.querySelector(".count");
let userCount = parseInt(localStorage.getItem("userCount")) || 0;
userCountCount.textContent = userCount;

if (signInBtn) {
  signInBtn.addEventListener("click", () => {
    userCount++;
    userCountCount.textContent = userCount;
    localStorage.setItem("userCount", userCount);
  });
}
