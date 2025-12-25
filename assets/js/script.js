// Initialize Animations
AOS.init({
    duration: 1000,
    once: true,
});

let slides = document.querySelectorAll('.slide');
let current = 0;

setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}, 4000);

// Mobile Menu Toggle (Basic logic)
 const studioBtn = document.getElementById('studioMenuBtn');
const studioMenu = document.getElementById('studioNavLinks');

studioBtn.addEventListener('click', () => {
    studioMenu.classList.toggle('active');
    
    // Burger Icon Animation
    const spans = studioBtn.querySelectorAll('span');
    studioBtn.classList.toggle('is-open');
    if(studioBtn.classList.contains('is-open')){
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
    } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
    }
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
document.querySelectorAll('.control').forEach(button => {
    button.addEventListener('click', function() {
        // Active class change karna
        document.querySelectorAll('.control').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');
        const items = document.querySelectorAll('.gallery-item');

        items.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.style.display = 'block';
                setTimeout(() => { item.style.opacity = '1'; }, 10);
            } else {
                item.style.opacity = '0';
                setTimeout(() => { item.style.display = 'none'; }, 300);
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
document.addEventListener('DOMContentLoaded', () => {

    // 1. AOS Initialization (Safe)
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true });
    }

    // 2. Infinite Loop Logic (No flickering)
    const track = document.getElementById('productTrack');
    if (track) {
        const content = track.innerHTML;
        track.innerHTML = content + content;
    }

    // 3. Navbar scroll fix
    const navbar = document.querySelector('.custom-studio-header') || document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
                navbar.style.background = '#1a1a1a';
            } else {
                navbar.classList.remove('scrolled');
                navbar.style.background = '#2C3338';
            }
        });
    }

    // 4. Mobile Touch to Pause
    if (track) {
        track.addEventListener('touchstart', () => {
            track.style.animationPlayState = 'paused';
        }, { passive: true });

        track.addEventListener('touchend', () => {
            track.style.animationPlayState = 'running';
        }, { passive: true });
    }

   // 6. FAST SCROLL (ALL DEVICES)
if (track) {
    track.style.animation = 'scroll 8s linear infinite';
}

});
