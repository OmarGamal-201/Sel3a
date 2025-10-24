 document.body.style.margin = "0";
document.body.style.backgroundColor = "#c9c9c9";
document.body.style.fontFamily = "Arial, sans-serif";

let card = document.querySelector(".cardd");
card.style.width = "110%";
card.style.maxWidth = "1500px";
card.style.display = "flex";
card.style.borderRadius = "10px";
card.style.backgroundColor = "white";
card.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
card.style.flexWrap = "wrap";
card.style.margin = "20px auto";
card.style.height = "600px";

let cardleft = document.querySelector(".cardleft");
cardleft.style.width = "100%";
cardleft.style.maxWidth = "300px";
cardleft.style.backgroundColor = "#f14a00";
cardleft.style.display = "flex";
cardleft.style.flexDirection = "column";
cardleft.style.alignItems = "center";
cardleft.style.justifyContent = "center";
cardleft.style.padding = "40px 20px";
cardleft.style.boxSizing = "border-box";
cardleft.style.borderRadius = "10px";

let img = document.querySelector('#proimg');
img.src = "./1.jpg";
img.style.width = "120px";
img.style.height = "120px";
img.style.marginTop = "-90px";
img.style.marginBottom = "20px";
img.style.borderRadius = "50%";
img.style.objectFit = "cover";
img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

let imgInput = document.querySelector("#file");
imgInput.type = "file";
imgInput.style.display = "none";

let username = document.querySelector(".username");
username.innerHTML = "Ahemd Hisham";
username.style.color = "black";
username.style.fontSize = "20px";
username.style.marginTop = "40px";

let icon = document.querySelector(".icon");
icon.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
icon.style.color = "#333";
icon.style.fontSize = "20px";
icon.style.marginTop = "70px";
icon.style.cursor = "pointer";

let cardright = document.querySelector(".cardright");
cardright.style.padding = "30px";
cardright.style.boxSizing = "border-box";
cardright.style.backgroundColor = "#fff";

let info = document.querySelector(".info");
info.innerHTML = "Information";
info.style.fontSize = "26px";
info.style.marginBottom = "10px";
let hr1 = document.querySelector(".line");
    hr1.style.width = '110%';
    hr1.style.maxWidth = '1000px';
    hr1.style.height = '2px';
    hr1.style.backgroundColor = '#ddd';
    // line.style.border = 'none';
    hr1.style.margin = '30px 80px';


let butm = document.querySelector(".butm");
butm.style.textAlign = "left";
icon.addEventListener('click', () => {
    imgInput.click();  
});

imgInput.addEventListener('change', () => {
    const file = imgInput.files[0]; 
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            img.src = e.target.result; 
        };
    reader.readAsDataURL(file);
    }
});