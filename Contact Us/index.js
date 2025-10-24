// 🌙 تبديل الوضع الليلي
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
