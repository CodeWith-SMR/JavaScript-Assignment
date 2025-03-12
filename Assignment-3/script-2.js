let products = [
  {
    id: 101,
    title: "Sony LED 40 inch",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "red", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      { id: 1, user: "Ahmad", rating: 4.0, status: true },
      { id: 2, user: "Zubair", rating: 4.5, status: false },
      { id: 3, user: "Ali", rating: 5.0, status: true },
    ],
  },
  {
    id: 102,
    title: "Mobile",
    variations: [
      { id: 1, color: "black", price: 50000, quantity: 5 },
      { id: 2, color: "green", price: 50000, quantity: 1 },
      { id: 3, color: "silver", price: 55000, quantity: 8 },
    ],
    reviews: [
      { id: 1, user: "Ahmad", rating: 4.0, status: true },
      { id: 2, user: "Zubair", rating: 4.5, status: false },
    ],
  },
];

function findProductById(id) {
  return products.find(product => product.id === id);
}
// console.log(findProductById(101)); 
// ✅ Output: ["Laptop", "Smartphone"]

function gitAvailabaleColors(productId) {
  let product = findProductById (productId);
  return product ? product.variations.map(variations => variations.color) : [];
}
// console.log(gitAvailabaleColors(102));
// ✅ Output: ["Silver", "Black"]

function getTotalQuantity(productId) {
  let product = findProductById(productId);
  return product ? product.variations.reduce((sum, v) => sum + v.quantity, 0) : 0;
}
// console.log(getTotalQuantity(101));
// ✅ Output: 5 + 1 + 8 = 14


function getLowStockProduct() {
  
}