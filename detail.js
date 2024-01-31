let id = new URLSearchParams(window.location.search).get("id");
console.log(id);
let details = document.querySelector(".details");
let detailsByAxios = document.querySelector(".detailsByAxios");

async function getProduct(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    let product = await response.json();
    console.log(product);
    details.innerHTML = `<div class="product">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <div class="images">
        ${product.images.map(image => `<img src="${image}" alt="img">`).join(' ')}
        </div>
    </div>`}
getProduct(id);

async function getProductByAxios(id) {

    const productByAxios =
        await axios.get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log(error);
                return [];
            });
    console.log(productByAxios);
    detailsByAxios.innerHTML = `<div class="product">
        <h2>${productByAxios.title} By Axios</h2>
        <p>${productByAxios.description}</p>
        <div class="images">
        ${productByAxios.images.map(image => `<img src="${image}" alt="img">`).join(' ')}
        </div>
    </div>`}
getProductByAxios(id);