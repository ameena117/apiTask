let id = new URLSearchParams(window.location.search).get("id");
console.log(id);
let details = document.querySelector(".details");

async function getProduct(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    let product = await response.json();
    console.log(product);
    details.innerHTML = 
    `
    <div>
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    ${product.images.map(image => `<img src="${image}" alt="img">`).join(' ')}
    </div>
    `
    
    
}

getProduct(id);