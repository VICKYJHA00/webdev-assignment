// DOM Elements
const filterButtons = document.querySelectorAll('.btn');
const projects = document.querySelectorAll('.project-card');
const fadeElements = document.querySelectorAll('.fade-in');

// Project Filtering
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        projects.forEach(project => {
            if (filterValue === 'all' || project.getAttribute('data-category') === filterValue) {
                project.style.display = 'block';
                // Trigger reflow for animation
                void project.offsetWidth;
                project.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeElements.forEach(element => {
    observer.observe(element);
});
