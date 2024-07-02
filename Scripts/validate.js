// Assuming you have some mock data for registered users
const registeredUsers = [
    { username: "abhi.ram", password: "password123" },
    { username: "ym.abhishek", password: "securepwd" }
];

// Function to validate login form
function validateLoginForm(username, password) {
    // Check if username exists in registeredUsers array
    const user = registeredUsers.find(user => user.username === username);

    if (!user) {
        alert("Username not found. Please sign up first.");
        return false;
    }

    // Check if password matches
    if (user.password !== password) {
        alert("Incorrect password. Please try again.");
        return false;
    }

    // Login successful
    return true;
}

// Handle form submission
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve input field values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate the form
    if (validateLoginForm(username, password)) {
        // Optionally, handle remember me functionality
        const rememberMe = document.getElementById("remember").checked;
        if (rememberMe) {
            // Implement remember me logic if needed
        }

        // Redirect or perform other actions upon successful login
        alert("Login successful!");
        // Redirect to another page or display a welcome message
        window.location.href = "User Data Management.html";
    }
});
