// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Mobile Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple animation for hamburger
        hamburger.classList.toggle('toggle');
    });
}

// Close hamburger menu when clicking on nav links
if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });
}

// Booking Form Logic - Show Date Picker only if 'Schedule Later' is selected
const bookLaterRadio = document.getElementById('bookLater');
const bookNowRadio = document.getElementById('bookNow');
const scheduleGroup = document.getElementById('scheduleDateGroup');

[bookLaterRadio, bookNowRadio].forEach(radio => {
    radio.addEventListener('change', () => {
        if (bookLaterRadio.checked) {
            scheduleGroup.classList.remove('hidden');
        } else {
            scheduleGroup.classList.add('hidden');
        }
    });
});

// Form Submission Handling
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple Frontend Validation
    const name = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    
    if(name && phone) {
        alert(`Thank you, ${name}! Your booking request for AirLux Services has been received. Our team will contact you shortly.`);
        
        // Backend API integration will be added later
        // Example: fetch('/api/book', { method: 'POST', body: JSON.stringify(formData) })
        
        bookingForm.reset();
        scheduleGroup.classList.add('hidden');
    }
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});