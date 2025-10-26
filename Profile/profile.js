// تفعيل قائمة الهامبرغر
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

// إضافة المنتجات للجدول
document.addEventListener("DOMContentLoaded", () => {

    const searchInput = document.getElementById("searchInput");
    var tableBody = document.querySelector("table tbody");

searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase();
  const rows = tableBody.getElementsByTagName("tr");

  for (let i = 0; i < rows.length; i++) {
    const nameCell = rows[i].getElementsByTagName("td")[1]; 
    if (nameCell) {
      const nameText = nameCell.textContent || nameCell.innerText;
      if (nameText.toLowerCase().indexOf(filter) > -1) {
        rows[i].style.display = ""; 
      } else {
        rows[i].style.display = "none"; 
      }
    }
  }
});
  const form = document.querySelector("#exampleModal form");
  
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("product-name").value.trim();
  const price = document.getElementById("product-price").value.trim();
  const imageInput = document.getElementById("product-image");

  if (!name || !price) {
    alert("Please register product name and price!");
    return;
  }

  const imageURL = imageInput.files[0]
    ? URL.createObjectURL(imageInput.files[0])
    : "./image/OIP.webp";

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td><img src="${imageURL}" width="50" height="50" style="object-fit:cover; border-radius:5px;"></td>
    <td>${name}</td>
    <td>$${price}</td>
  `;

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let prod = { name: name, price: `$${price}` };
  users.push(prod);
  localStorage.setItem("users", JSON.stringify(users));

  tableBody.appendChild(newRow);

  modal.hide();
  form.reset();
});


// تغيير صورة البروفايل
const icon = document.querySelector(".fa-regular.fa-pen-to-square");
const img1 = document.getElementById("proimg1");
const img2 = document.getElementById("proimg2");
icon.style.cursor = "pointer";
const imgInput = document.createElement("input");
imgInput.type = "file";
imgInput.style.display = "none";
document.body.appendChild(imgInput);

icon.addEventListener("click", () => imgInput.click());

imgInput.addEventListener("change", () => {
  const file = imgInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        img1.src = e.target.result;
        img2.src = e.target.result;
    }
    reader.readAsDataURL(file);
  }
});
});

