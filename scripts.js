// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Pop-Up Details (Example for Skills Section)
document.querySelectorAll('#skills li').forEach(skill => {
    skill.addEventListener('click', function() {
        alert('More information about ' + this.textContent);
    });
});

// Fade-in Animation for Sections
window.addEventListener('scroll', function() {
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});
