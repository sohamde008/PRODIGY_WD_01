document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // Toggle Nav
    const toggleNav = () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    };

    // Close Nav on Outside Click
    const closeNavOnClickOutside = (event) => {
        if (!nav.contains(event.target) && !burger.contains(event.target)) {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(link => link.style.animation = '');
        }
    };

    // Event Listeners
    burger.addEventListener('click', toggleNav);
    document.addEventListener('click', closeNavOnClickOutside);

    // Accessibility: Close Nav on Escape Key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(link => link.style.animation = '');
        }
    });
});
