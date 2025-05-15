const item1 = {
    name: "SmartTv 55 inch",
    price: 5000,
    category: "electronics",
    fastship: true,
    rating: 4.5,
};

const item2 = {
    name: "SmartTv 65 inch",
    price: 7000,
    category: "electronics",
    fastship: true,
    rating: 4.7,
};

const item3 = {
    name: "SmartTv 75 inch",
    price: 9000,
    category: "electronics",
    fastship: false,
    rating: 4.8,
};

const products = [item1, item2, item3];

console.log(products);
// Filter the products that have fastship
const FilterFastshipItems = products.filter(
    function (product) {
        return product.fastship;
    }
);

// Print the items with price less than 6000

const FilterNameItems = products.filter(
    function (product) {
        return product.name.includes("75 inch");
    }
);

const FilterPriceItems = products.filter(
    function (product) {
        return product.price < 6000;
    }
);

console.log("products with price less than 6000: ");
console.log(FilterPriceItems);

console.log("products with fastship : ");
console.log(FilterFastshipItems);

console.log("products with name 75 inch :");
console.log(FilterNameItems);