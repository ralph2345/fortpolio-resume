
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


// Sending email using EmailJS
emailjs.init("JggfabjZk4lEZ6Xlx");

function sendEmail() {
    const email = document.getElementById("email").value.trim();
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    const templateParams = {
        from_name: name,
        email_id: email,
        message: message,
    };

    emailjs
    .send("service_hzwpo2u", "template_akie6eh", templateParams)
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully!");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("There was an error sending your message. Please try again.");
      }
    );
}
