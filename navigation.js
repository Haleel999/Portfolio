// Navigation Management - ES6 Module
export function initNavigation() {
    // Mobile Navigation Toggle
    document.querySelector('.nav-toggle').addEventListener('click', function() {
        document.querySelector('.nav-list').classList.toggle('active');
        // Change icon based on menu state
        const icon = this.querySelector('i');
        if (document.querySelector('.nav-list').classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-list').classList.remove('active');
            // Reset menu icon
            const icon = document.querySelector('.nav-toggle i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        const isNavClick = e.target.closest('.nav-list') || e.target.closest('.nav-toggle');
        if (!isNavClick && document.querySelector('.nav-list').classList.contains('active')) {
            document.querySelector('.nav-list').classList.remove('active');
            // Reset menu icon
            const icon = document.querySelector('.nav-toggle i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}