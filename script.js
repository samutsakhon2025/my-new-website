document.addEventListener('DOMContentLoaded', function() {
    
    const heroContent = document.querySelector('.hero-content');

    // Add a small delay for the animation to be noticeable
    setTimeout(() => {
        if (heroContent) {
            heroContent.classList.add('visible');
        }
    }, 200); // 200 milliseconds delay

});