function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
  }

 
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  
  document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Registration successful!');
        closeModal('signup-modal');
      } else {
        alert(result.message || 'Registration failed');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  });

  
  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Login successful!');
        closeModal('login-modal');
      } else {
        alert(result.message || 'Login failed');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  });

  
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlides() {
    slides.forEach((slide, index) => {
      slide.style.display = 'none';
    });

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); 
  }

  showSlides();

