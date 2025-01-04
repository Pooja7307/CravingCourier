function signup(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const username = document.getElementById("email").value;
    const password = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const mobileNumber = document.getElementById("mobileNumber").value;
    const pincode = document.getElementById("pincode").value;
    const location = document.getElementById("location").value;
    const errorMessage = document.getElementById("errorMessage");
    const successMessage = document.getElementById("successMessage");

   
    errorMessage.innerText = "";
    successMessage.innerText = "";

   
    if (password !== confirmPassword) {
      errorMessage.innerText = "Passwords do not match!";
      return;
    }

    // Store user data in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      errorMessage.innerText = "Email already exists!";
      return;
    }

    users.push({
      firstName,
      lastName,
      email,
      password,
      mobileNumber,
      pincode,
      location,
    });
    localStorage.setItem("users", JSON.stringify(users));

    successMessage.innerText = "Signup successful!!!";
    setTimeout(() => {
      window.location.href = "home.html"; 
    }, 2000);
  }