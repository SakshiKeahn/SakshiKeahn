document.addEventListener('DOMContentLoaded', () => {
    // Add event listener to all nav links to handle the active class
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.parentElement.classList.add('active');
        } else {
            link.parentElement.classList.remove('active');
        }
    });
});
