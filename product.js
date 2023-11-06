// Retrieve product details from localStorage
const product = JSON.parse(localStorage.getItem('selectedProduct'));

// Get quantity input and buttons
const quantityInput = document.getElementById('quantity');
const decreaseQuantityButton = document.getElementById('decrease-quantity');
const increaseQuantityButton = document.getElementById('increase-quantity');

// Initialize the quantity input with a default value
// if (product) {
//     quantityInput.value = 1;
// }

// // Add event listeners to increase and decrease the quantity
// decreaseQuantityButton.addEventListener('click', function () {
//     if (quantityInput.value > 1) {
//         quantityInput.value = parseInt(quantityInput.value) - 1;
//     }
// });

// increaseQuantityButton.addEventListener('click', function () {
//     quantityInput.value = parseInt(quantityInput.value) + 1;
// });

function renderProductDetails() {
    const productDetails = document.getElementById('product-details');

    if (product) {
        // Render the selected product details
        const productElement = document.createElement('div');
        setInterval(() => {
            productElement.innerHTML = `
        <h2>${product.title}</h2>
        <img src="${product.thumbnail}" alt="${product.title}" width="100" height="100">
        <p>Price: ₦${product.price}</p>
    `;
        }, 2000);
        productDetails.appendChild(productElement);
    }
}

let but = document.getElementById ("but");
let bad = document.getElementById ("bad");
bad.style.display = "none"
function addToCart() {
    if (product) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const quantity = parseInt(quantityInput.value);

        // Add the selected product with the specified quantity to the cart
        const cartItem = {
            ...product,
            quantity: quantity
        };
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert("Product added to cart.");
        bad.style.display = "block"
        but.style.display = "none"
    }
}

function navigateToLoginPage() {
    window.location.href = "login page.html";
}

// Call renderProductDetails to display the product details
renderProductDetails();

function rrr() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the selected product with the specified quantity to the cart
    localStorage.setItem('cart', JSON.stringify(cart));
    const counterElement = document.getElementById('counter');
    const cartSize = cart.reduce((total, item) => total + item.quantity, 0);
    counterElement.textContent = cartSize;

}
rrr()
function goToCart() {
    window.location.href = "cart.html"
}
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
let bf = document.getElementById("bf");
let sss = document.getElementById("sss");
let var1 = document.getElementById("var1")
let span = document.getElementById("span")
if (loggedInUser) {
    var1.style.display = "none"
    bf.style.display = "block"
    sss.innerHTML = `${loggedInUser.username}`
  
  }
  
  // Retrieve the logged-in user from localStorage
  
  // Function to log the user out
  function logout() {
    // Remove the logged-in user information from localStorage
    localStorage.removeItem("loggedInUser");
    window.location.href = 'product.html';
  }
// Call addToCart when you want to add the product to the cart
// For example, you can call it when the user clicks an "Add to Cart" button.

// Call navigateToLoginPage when you want to navigate to the login page
// For example, you can call it when the user clicks a "Sign In" button.
decreaseQuantityButton.addEventListener('click', function () {
    updateQuantity(-1); // Decrease quantity by 1
});

increaseQuantityButton.addEventListener('click', function () {
    updateQuantity(1); // Increase quantity by 1
});
function updateQuantity(change) {
    if (product) {
        const currentQuantity = parseInt(quantityInput.value);
        const newQuantity = currentQuantity + change;

        if (newQuantity > 0) {
            // Update the input field with the new quantity
            quantityInput.value = newQuantity;

            // Update the quantity in localStorage
            updateQuantityInLocalStorage(newQuantity);
        }
    }
}

function updateQuantityInLocalStorage(newQuantity) {
    if (product) {
        // Update the quantity of the selected product in localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = cart.map((item) => {
            if (item.id === product.id) {
                return {
                    ...item,
                    quantity: newQuantity
                };
            }
            return item;
        });

        // Save the updated cart back to localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
}
