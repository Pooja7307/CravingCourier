let currentSlide = 0;

        function showSlide(index) {
            const slides = document.querySelectorAll('.slide');
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        function changeSlide(direction) {
            const slides = document.querySelectorAll('.slide');
            currentSlide = (currentSlide + direction + slides.length) % slides.length;
            showSlide(currentSlide);
        }

        
        setInterval(() => {
            changeSlide(1);
        }, 3000); 