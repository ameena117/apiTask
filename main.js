
async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    let products = await response.json();
    products = products.products;
    console.log(products);
    const result = products.map(function (product) {
        return `
        

        <div class="product">
        <img src="${product.thumbnail}"</img>
                <h3>${product.title}</h3>
                <h4>${product.price} $</h4>
                <a href="product.html?id=${product.id}">See More</a>
            </div>
        `
    }
    ).join(' ');
    document.querySelector(".products .container .row").innerHTML = result;
}
getProducts();

async function getProductsByAxios() {
    const productsByAxios =
    await axios.get("https://dummyjson.com/products")
        .then((response) => {
            return response.data.products;
        })
        .catch((error) => {
            console.log(error);
            return [];
        });
    console.log(productsByAxios);    

    const result = productsByAxios.map(function (product) {
        return `

            <div class="product">
                <img src="${product.thumbnail}"</img>
                <h3>${product.title}</h3>
                <h4>${product.price} $</h4>
                <a href="product.html?id=${product.id}">See More</a>
            </div>
        `
    }
    ).join(' ');
    document.querySelector(".productsByAxios .container .row").innerHTML = result;
}
getProductsByAxios();