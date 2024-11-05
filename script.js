// Contact form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Test drive request submitted. We will contact you soon.');
});

// Slider functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const totalSlides = slides.length;

// Function to display a slide by index
function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Event listeners for manual navigation
document.querySelector('.prev').addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    showSlide(slideIndex + 1);
});

// Automatic slide transition
setInterval(() => {
    showSlide(slideIndex + 1);
}, 3000); // Scrolls every 3 seconds

// Hover message display and fade-out effect
document.addEventListener("DOMContentLoaded", function() {
    const hoverMessage = document.querySelector('.hover-message');
    
    // Show hover message on load
    hoverMessage.style.opacity = '1';

    // Fade out the hover message after a delay
    setTimeout(() => {
        hoverMessage.style.opacity = '0';
        
        setTimeout(() => {
            hoverMessage.style.display = 'none';
        }, 300); 
    }, 3000);
});

// Initial call to display the first slide
showSlide(slideIndex);
