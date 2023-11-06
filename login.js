// Function to handle login
function handleLogin() {
    // Get form values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Retrieve user data from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the provided username and password match any user
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Login successful!");

        // Save user information to local storage
        localStorage.setItem("loggedInUser", JSON.stringify(user));

        // Redirect to a dashboard or home page
        window.location.href = "cart.html"; // Assuming the dashboard page is named "dashboard.html"
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
