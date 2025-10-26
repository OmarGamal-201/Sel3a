const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelectorAll(".lable-input")[0].value.trim();
  const email = form.querySelectorAll(".lable-input")[1].value.trim();
  const message = form.querySelectorAll(".lable-input")[2].value.trim();

  const messages = JSON.parse(localStorage.getItem("messages")) || [];

  messages.push({
    name,
    email,
    message,
    date: new Date().toLocaleString(),
  });

  localStorage.setItem("messages", JSON.stringify(messages));
  alert("✅ تم إرسال الرسالة بنجاح!");
  form.reset();
});
