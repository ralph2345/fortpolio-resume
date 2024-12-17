
function showSection(section, el, event) {
    // Prevent the default behavior of the anchor tag (which would cause the page to scroll to the top)
    event.preventDefault();

    // Hide all sections
    document.querySelector('.about-section').classList.remove('active');
    document.querySelector('.education-section').classList.remove('active');

    // Show the selected section with the 'active' class
    if (section === 'about') {
        document.querySelector('.about-section').classList.add('active');
    } else if (section === 'education') {
        document.querySelector('.education-section').classList.add('active');
    }

    // Remove active class from all links
    const links = document.querySelectorAll('.btn-box1 a');
    links.forEach(link => link.classList.remove('active'));

    // Add active class to the clicked link
    el.classList.add('active');
}

// Set default active section
document.addEventListener('DOMContentLoaded', () => {
    showSection('about', document.querySelector('.btn-box1 a.active'));
});