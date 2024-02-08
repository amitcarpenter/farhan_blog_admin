// Trigger animations when the document is ready
document.addEventListener("DOMContentLoaded", function () {
    animateSections();
});

// Add animations to sections
function animateSections() {
    const sections = document.querySelectorAll('.animate__animated');

    sections.forEach(section => {
        section.style.opacity = 0;
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.classList.remove('animate__animated');
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });
}
