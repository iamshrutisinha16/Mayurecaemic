// Initialize Animations
AOS.init({
    duration: 1000,
    once: true,
});

// Mobile Menu Toggle (Basic logic)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
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

/*gallery*/
// Initialize Animations
AOS.init({ duration: 1000, once: true });

// Filter Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        galleryItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
                setTimeout(() => item.style.opacity = '1', 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => item.style.display = 'none', 400);
            }
        });
    });
});

// Lightbox (Zoom in logic)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex';
    });
});

closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) lightbox.style.display = 'none';
});

/*products*/
const track = document.getElementById('mainTrack');
const next = document.getElementById('slideNext');
const prev = document.getElementById('slidePrev');

let scrollPosition = 0;
const cardWidth = 410; // Card width (380) + gap (30)

next.addEventListener('click', () => {
    const maxScroll = track.scrollWidth - track.parentElement.clientWidth;
    if (scrollPosition < maxScroll) {
        scrollPosition += cardWidth;
        if(scrollPosition > maxScroll) scrollPosition = maxScroll; // Fix overflow
        track.style.transform = `translateX(-${scrollPosition}px)`;
    }
});

prev.addEventListener('click', () => {
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        if(scrollPosition < 0) scrollPosition = 0;
        track.style.transform = `translateX(-${scrollPosition}px)`;
    }
});