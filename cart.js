function renderCart() {
    const cartElement = document.getElementById('cart');
    const totalPriceElement = document.getElementById('total-price');

    // Retrieve the cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let totalPrice = 0;

    cartElement.innerHTML = ''; // Clear the cart before rendering

    cart.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <div class="cart-item container">
                <div class =" conn">
                    <div class="is">
                        <img src="${product.thumbnail}" alt="${product.title}" width="100px" height="100px">
                    </div>
                    <div class="is">
                        <h3>${product.title}</h3>
                        <p>Price: ₦${product.price}</p>
                    </div>
                </div>
                <div class = " d-flex conn">
                    <div class="non" onclick="deleteProduct(${index})">
                        <i class="fa-solid fa-trash"></i>
                        <button class="bbbc" >Remove</button>
                    </div>
                    <div>
                    <div class="quantity-controls">
                    <label for="quantity">Quantity:</label>
                        <button class="btn1 btn-quantity" onclick="decreaseQuantity(${index})">-</button>
                        <span id="quantity${index}">${product.quantity}</span>
                        <button class="btn1 btn-quantity" onclick="increaseQuantity(${index})">+</button>
                    </div>                        
                </div>
                </div>
            </div>
        `;
        cartElement.appendChild(productElement);

        // Calculate the total price
        totalPrice += product.price * product.quantity;
    });

    // Display the total price
    totalPriceElement.textContent = `Sub-Total: ₦${totalPrice}`;
    localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
}

function decreaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
        localStorage.setItem('cart', JSON.stringify(cart));
        window.location.href ="cart.html"
        renderCart(); // Re-render the cart with the updated quantity
    }
}

function increaseQuantity(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity++;
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.href ="cart.html"
    renderCart(); // Re-render the cart with the updated quantity
}

function deleteProduct(index) {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if(confirmDelete){
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1); // Remove the product from the cart array
        localStorage.setItem('cart', JSON.stringify(cart)); // Update local storage
        window.location.href ="cart.html"
    }
    renderCart(); // Re-render the cart
}

function sign() {
    setInterval(() => {
        window.location.href = "login page.html";
    }, 2000);
}

// Call renderCart to initially render the cart
renderCart();

// Call decreaseQuantity, increaseQuantity, and deleteProduct functions as needed when interacting with the cart items.
function rrr() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the selected product with the specified quantity to the cart
    localStorage.setItem('cart', JSON.stringify(cart));
    const counterElement = document.getElementById('counter');
    const cartSize = cart.reduce((total, item) => total + item.quantity, 0);
    counterElement.textContent = cartSize;

}
rrr()

function goToCart(){
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
    window.location.href = 'cart.html';
  }
// Modify this code for your preferred payment gateway

// Function to initiate the payment process
function makePayment() {
    let totalPrice = JSON.parse(localStorage.getItem('totalPrice')) || [];
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!loggedInUser){
        window.location.href = "login.html"
    }

    const paymentData = {
        user:loggedInUser,
        totalPrice:totalPrice,
        cart:cart
    };
    localStorage.setItem("paymentData", JSON.stringify(paymentData))
        FlutterwaveCheckout({
            public_key: 'FLWPUBK_TEST-70bc8d3cdbb982b087188c88d0fc21ab-X',
            tx_ref: "titanic-48981487343MDI0NzMx",
            amount: totalPrice,
            currency: "NGN",
            payment_options: "card, banktransfer, ussd",
            redirect_url: "file:///C:/Users/user/Desktop/Jumia%20project/receipt.html",
            meta: {
                consumer_id: 23,
                consumer_mac: "92a3-912ba-1192a",
            },
            customer: {
                email: `${loggedInUser.emailPhone}`,
                name: `${loggedInUser.username}`,
            },
            customizations: {
                title: "The Titanic Store",
                description: "Payment for an awesome cruise",
                logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
            },
        });
    }
