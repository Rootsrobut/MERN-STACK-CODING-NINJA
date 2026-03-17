export default class ProductModel {
    constructor(ID, name, description, imageURL, category, price, sizes) {
        this.ID = ID;
        this.name = name;
        this.description = description;
        this.imageURL = imageURL;
        this.category = category;
        this.price = price;
        this.sizes = sizes;
    }
    static GetAll(){
        return products;
    }
    static add(product){
        product.ID=products.length+1;
        products.push(product);
        return product;
    }
    static getProductById(id) {
     const product = products.find((p) => p.ID === id);
     return product;
    }
    static filter(minPrice, maxPrice, category) {
        return products.filter((product) => (!minPrice || product.price >= minPrice) && (!maxPrice || product.price <= maxPrice) && (!category || product.category === category)); 
    }
}

var products = [
    new ProductModel(
        1,
        "Running Shoes",
        "Comfortable and lightweight running shoes.",
        "https://example.com/images/running-shoes.jpg",
        "Footwear",
        120.99,
        ["8", "9", "10", "11"]
    ),
    new ProductModel(
        2,
        "Classic T-Shirt",
        "Premium cotton t-shirt available in multiple colors.",
        "https://example.com/images/tshirt.jpg",
        "Apparel",
        19.99,
        ["S", "M", "L", "XL"]
    ),
    new ProductModel(
        3,
        "Wireless Headphones",
        "Noise-cancelling wireless headphones with long battery life.",
        "https://example.com/images/headphones.jpg",
        "Electronics",
        199.99,
        []
    ),
    new ProductModel(
        4,
        "Backpack",
        "Durable and spacious backpack suitable for travel and daily use.",
        "https://example.com/images/backpack.jpg",
        "Accessories",
        59.99,
        []
    )
];
