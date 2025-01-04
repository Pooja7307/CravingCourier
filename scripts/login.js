function login(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // Redirect to the home page
      window.location.href = "home.html";
    } else {
      // Show an error message if login fails
      document.getElementById("errorMessage").innerText =
        "Invalid email or password!";
    }
  }