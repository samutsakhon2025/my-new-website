document.addEventListener('DOMContentLoaded', function() {
    
    const heroContent = document.querySelector('.hero-content');
    const header = document.getElementById('main-header');

    // Fade-in animation for hero content
    setTimeout(() => {
        if (heroContent) {
            heroContent.classList.add('visible');
        }
    }, 200);

    // Change header background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // ถ้าเลื่อนลงมามากกว่า 50px
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

});