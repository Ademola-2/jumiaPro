
let img = document.getElementById("img");
let imgarr = ["jumia-pay-712x384.jpg", "Desktop-Homepage-Slider_712x384-1.jpg", "defacto-slider.jpg", "BestDealsOnHomeTelevision_Slider.png"]
let index = 0;
img.src = imgarr[index];

function show() {
  let interval = setInterval(() => {
    if (index == imgarr.length - 1) {
      index = -1;
    }
    index++;
    img.src = imgarr[index]

  }, 3000)

}
show()

function next() {
  if (index = 0) {
    index = imgarr.length;

  }
  index++
  img.src = imgarr[index]

}
img.src = imgarr[index]
function prev() {

  if (index = 0) {
    index = imgarr.length;
  }
  index--
  img.src = imgarr[index]
}



let api = document.getElementById("api");
let i = 0;
let products = [];


function displayAdminProducts() {
  api.innerHTML = ''
  fetch("http://localhost:1111/products")
    .then((res) => res.json())
    .then((data) => {
      products = data
      console.log(products);
      products.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
        <div class="container-sm adenn" onclick="pickeditem(${product.id})">
          <div class="container-sm display:flex;">
              <img src="${product.thumbnail}" alt="${product.name}">
              <h5>${product.title}</h5>
              <p>Price: ₦${product.price}</p>
          </div>
      </div>

    
            `;

        api.appendChild(productElement);

      });
    }).catch((err) => {
      console.log(err);
    })
}



// Initial display of products on the admin page
displayAdminProducts();

let phonesection = document.getElementById("phonesection")
function cum() {
  let newarry = products.filter(function (el) {
    return el.category == "smartphones";

  })

  for (i = 0; i < newarry.length; i++) {
    let phones = newarry[i]

    phonesection.innerHTML += `<div class="container-sm adenn1" onclick="pickeditem(${phones.id})">
    <div class="container-sm display:flex;">
        <img src="${phones.thumbnail}" alt="${phones.name}">
        <h5>${phones.title}</h5>
        <p>Price: ₦${phones.price}</p>
    </div>
</div>
   `}
} setTimeout(cum, 1000)

let fragrances = document.getElementById("fragrances")

function frank() {
  let = bird = products.filter(function (el) {
    return el.category == "fragrances"
  })
  for (i = 0; i < bird.length; i++) {
    let bath = bird[i]

    fragrances.innerHTML += `<div class="container-sm adenn1" onclick="pickeditem(${bath.id})">
    <div class="container-sm display:flex;">
        <img src="${bath.thumbnail}" alt="${bath.name}">
        <h5>${bath.title}</h5>
        <p>Price: ₦${bath.price}</p>
    </div>
</div>`
  }

} setTimeout(frank, 1000)

let put = document.getElementById("put")

function comp() {
  let best = products.filter(function (el) {
    return el.category == "laptops"
  })
  for (i = 0; i < best.length; i++) {
    let rest = best[i]

    put.innerHTML += `<div class="container-sm adenn1" onclick="pickeditem(${rest.id})">
    <div class="container-sm display:flex;">
        <img src="${rest.thumbnail}" alt="${rest.name}">
        <h5>${rest.title}</h5>
        <p>Price: ₦${rest.price}</p>
    </div>
</div>`
  }








} setTimeout(comp, 1000)

function sign() {
  setInterval(() => {
    window.location.href = "login page.html"
  }, 2000);
}


// let product = [];

function pickeditem(id) {
  // Find the product by its id
  const product = products.find((el) => el.id === id);

  if (product) {
    // Store the selected product in local storage
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    // Redirect to the product details page
    window.location.href = 'product.html';
  }
}
function rrr() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Add the selected product with the specified quantity to the cart
  localStorage.setItem('cart', JSON.stringify(cart));
  const counterElement = document.getElementById('counter');
  const cartSize = cart.reduce((total, item) => total + item.quantity, 0);
  counterElement.textContent = cartSize;

}
rrr()
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
let bf = document.getElementById("bf");
let sss = document.getElementById("sss");
let var1 = document.getElementById("var1")
let span = document.getElementById("span")

// span.innerHTML = `${loggedInUser.username}`

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
  window.location.href = 'index.html';
}
function goToCart(){
  window.location.href = "cart.html"
}



// let userProduct = document.getElementById("userProduct");
// let product = [];


// function displayUserProducts() {
//   userProduct.innerHTML = ''
//   fetch("http://localhost:1111/product")
//     .then((res) => res.json())
//     .then((data) => {
//       products = data
//       console.log(products);
//       products.forEach((product, index) => {
//         const productElement = document.createElement('div');
//         productElement.innerHTML = `
//         <div class="container-sm adenn" onclick="pickeditem(${product.id})">
//           <div class="container-sm display:flex;">
//               <img src="${product.thumbnail}" alt="${product.name}">
//               <h5>${product.title}</h5>
//               <p>Price: ₦${product.price}</p>
//           </div>
//       </div>

    
//             `;

//         userProduct.appendChild(productElement);

//       });
//     }).catch((err) => {
//       console.log(err);
//     })
// }



// // Initial display of products on the User page
// displayUserProducts();