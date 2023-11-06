function Signup() {
    // Get form values
    const username = document.getElementById("username").value;
    const emailPhone = document.getElementById("emailPhone").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Check if any of the fields are empty
    if (username === "" || emailPhone === "" || password === "" || confirmPassword === "") {
        alert("Fill in all fields.");
        return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Create a user object
    const user = {
        username,
        emailPhone,
        password
    };

    // Retrieve the existing users or initialize an empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the user already exists
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        alert("Username already exists. Please choose a different username.");
        return;
    }

    // Add the user to the array
    users.push(user);

    // Store the updated array in localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect to the login page
    window.location.href = "login page.html";
}
function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleButton = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        
       toggleButton.innerHTML = `<i class="fa-regular fa-eye"></i>` ; // Show eye icon
    } else {
        passwordInput.type = "password";
        toggleButton.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`; // Show crossed eye icon
    }
}
function toggleConfirmPassword() {
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const toggleConfirmButton = document.getElementById("toggleConfirmPassword");

    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";

       toggleConfirmButton.innerHTML = `<i class="fa-regular fa-eye"></i>` ; // Show eye icon
    } else {
        confirmPasswordInput.type = "password";
        toggleConfirmButton.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`; // Show crossed eye icon
    }
}