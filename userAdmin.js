function goTo() {
    setInterval(() => {
        window.location.href = "index.html"
    }, 2000);
}
let productList = document.getElementById("productList");
let img = document.getElementById("img");
img.addEventListener("change", pickImage);
function pickImage(ev) {
    let file = ev.target.files[0];
    console.log(file);
    let reader = new FileReader();

    reader.addEventListener("load", (e) => {
        img.src = e.target.result;
    })

    if (file) {
        reader.readAsDataURL(file);
    }
}
let Name = document.getElementById('Name');
let Price = document.getElementById('Price');
let Category = document.getElementById('Category');
let Description = document.getElementById('Description');


function addProduct(ev) {
   

    fetch("http://localhost:1111/product ", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            thumbnail: img.src,
            title: Name.value,
            price: Price.value,
            category: Category.value,
            description: Description.value
        })
    }).then((res) => res.json())
        .then((data) => {
            console.log(data);
            alert("Reg successful")
            displayAdminProducts()
        }).catch((err) => {
            console.log(err);
        })

}

// Function to retrieve and display products
function displayAdminProducts() {
    productList.innerHTML = ''
    fetch("http://localhost:1111/product ")
        .then((res) => res.json())
        .then((data) => {
            product = data
            console.log(product);
            product.forEach((products, index) => {
                const productElement = document.createElement('div');
                productElement.innerHTML = `
        <div class="adenn" >
            <div>
                <img src="${products.thumbnail}" alt="${products.name}" width="100">
                <h2>${products.title}</h2>
                <p>Price: ₦${products.price}</p>
                <p>Category: ${products.category}</p>
                <p>Description: ${products.description}</p>
                <button onclick="editProduct(${index})" class="btn btn-success">Edit</button>
                <button onclick="deleteProduct(${products.id})" class="btn btn-danger">Delete</button>
            </div>
        </div>
            `;

                productList.appendChild(productElement);

            });
        }).catch((err) => {
            console.log(err);
        })
}



// Initial display of products on the admin page
displayAdminProducts();
function deleteProduct(productId) {
    const confirmDelete = confirm("Are you sure you want to delete this product?");
    if (confirmDelete) {
        fetch(`http://localhost:1111/product/${productId}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then(() => {
                alert("Product deleted successfully.");
                displayAdminProducts(); // Refresh the product list after deletion.
            })
            .catch((err) => {
                console.log(err);
                alert("An error occurred while deleting the product.");
            });
    }
}


function editProduct(index) {
    const productToEdit = product[index];

    // Use the prompt method to get the updated product details from the user
    const updatedTitle = prompt("Edit Product Name:", productToEdit.title);
    const updatedPrice = prompt("Edit Price:", productToEdit.price);
    const updatedCategory = prompt("Edit Category:", productToEdit.category);
    const updatedDescription = prompt("Edit Description:", productToEdit.description);

    // If the user cancels the prompt, updatedTitle and updatedPrice will be null
    if (updatedTitle === null || updatedPrice === null || updatedCategory === null || updatedDescription === null) {
        return;
    }

    // Update the product object with the new values
    productToEdit.title = updatedTitle;
    productToEdit.price = updatedPrice;
    productToEdit.category = updatedCategory;
    productToEdit.description = updatedDescription;

    // Send a PUT request to update the product on the server
    fetch(`http://localhost:1111/product/${productToEdit.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(productToEdit)
    })
        .then((res) => res.json())
        .then(() => {
            alert("Product updated successfully.");
            displayAdminProducts(); // Refresh the product list after updating.
        })
        .catch((err) => {
            console.log(err);
            alert("An error occurred while updating the product.");
        });
}
  