// تفعيل قائمة الهامبرغر
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  let btn = document.getElementById("menu-toggle");
  if (menu.classList.contains("active")) {
    btn.style.backgroundColor = "white";
  } else {
    btn.style.backgroundColor = "#36D4E9";
  }
});

// إضافة المنتجات للجدول
document.addEventListener("DOMContentLoaded", () => {

  var currentUser = JSON.parse(localStorage.getItem('currentUser')) || [];

    // ===== Assume the last registered user is the "logged in" user =====
    

    if (currentUser) {
        // ===== Update sidebar profile info =====
        var sidebarName = document.querySelector('.menu .profile h2');
        sidebarName.textContent = currentUser.firstName + ' ' + currentUser.lastName;

        var proimg1 = document.getElementById('proimg1');
        proimg1.src = './1.jpg'; // ممكن تحط رابط صورة المستخدم لو متاح

        // ===== Update main card info =====
        var cardName = document.querySelector('.cardleft h3');
        cardName.textContent = currentUser.firstName + ' ' + currentUser.lastName;

        var proimg2 = document.getElementById('proimg2');
        proimg2.src = './1.jpg'; // نفس الصورة في الكارد

        var emailDiv = document.querySelector('.cardcenter .email div:nth-child(2)');
        emailDiv.textContent = currentUser.email;

        var phoneDiv = document.querySelector('.cardcenter .phone div:nth-child(2)');
        phoneDiv.textContent = currentUser.phone;
    }
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

  let products = JSON.parse(localStorage.getItem("products")) || [];
  let prod = {img: imageInput.files[0], name: name, price: `${price}` };
  products.push(prod);
  localStorage.setItem("products", JSON.stringify(products));

  tableBody.appendChild(newRow);

  modal.hide();
  form.reset();
});

// تغيير صورة البروفايل
const icon = document.querySelector(".fa-regular.fa-pen-to-square");
const names = document.querySelectorAll("#name1 , #name2");
icon.style.cursor = "pointer";

icon.addEventListener("click", () => {
  let newname = prompt("Enter new name:", names[0].textContent);
  if (newname) {
    names.forEach(name => name.textContent = newname.trim());
  }
});
const profileImages = document.querySelectorAll("#proimg1, #proimg2");

profileImages.forEach(img => {
  img.addEventListener("click", () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.style.cursor = "pointer";
    fileInput.accept = "image/*";
    fileInput.click();

    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const imageURL = URL.createObjectURL(file);
        profileImages.forEach(el => el.src = imageURL);
      }
    });
  });
});
});
