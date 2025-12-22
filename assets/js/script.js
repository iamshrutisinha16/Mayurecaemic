// Initialize Animations
AOS.init({
    duration: 1000,
    once: true,
});

// Sticky Navbar Background Change on Scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#1a1a1a';
        nav.style.padding = '15px 5%';
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    } else {
        nav.style.background = '#2C3338';
        nav.style.padding = '20px 5%';
        nav.style.boxShadow = 'none';
    }
});

// FAQ Accordion Logic
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    item.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(inner => {
            if(inner !== item) inner.classList.remove('active');
        });
        // Toggle current item
        item.classList.toggle('active');
        const icon = item.querySelector('i');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    });
});
// Mobile Menu Toggle (Basic logic)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    // In a real project, you'd add a CSS class to show/hide the menu
    alert("Mobile Menu functionality can be expanded here!");
});