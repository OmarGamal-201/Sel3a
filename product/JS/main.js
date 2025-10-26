let product = JSON.parse(localStorage.getItem('selectedProduct'));

if (product) {
    displayProduct(product);
    // Clean up
    // localStorage.removeItem('selectedProduct');
}
else {
    console.log("no products");
}
function displayProduct(product) {
    let pimg = document.querySelector('.main-img');
    pimg.src = product.imgsrc;
    let pimgs = document.querySelectorAll('.img-thumbnail');
    pimgs.forEach(element => {
        element.src = product.imgsrc;
    });
    let pnm = document.querySelector('.pname');
    pnm.innerHTML = product.name;
    let brandName = document.querySelector('.brand-name');
    brandName.innerHTML = product.brandName;
    let cat = document.querySelector('.category');
    cat.innerHTML = product.category;
    let price = document.querySelector('.pprice');
    price.innerHTML = product.price;
    let decription = document.querySelector('.desc');
    decription.innerHTML = `
    <span class="pdescription">description : <br></span> ${product.description}`;

}