async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    let products = await response.json();
    products = products.products;
    const result = products.map(function (product) {
        return `
        
            <div class="col-md-2 col-12 my-2">
            <div class="card">
            <div class="card-body">
                <img src="${product.thumbnail}" class="card-top-img w-100"</img>
                <h3>${product.title}</h3>
                <h4>${product.price} $</h4>
                <a href="#">See More</a>
                </div>
                </div>
            </div>
        `
    }
    ).join(' ');
    document.querySelector(".products .container .row").innerHTML = result;
}
getProducts();