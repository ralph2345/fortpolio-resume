
// About section
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
emailjs.init("JggfabjZk4lEZ6Xlx");// public key

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

// smooth transition on clicking each navigations
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - (window.innerHeight / 2) + (targetSection.clientHeight / 2),
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section'); // Assuming you are using <section> for each part of your page

    // Function to handle adding the 'active' class to the navigation link
    function setActiveLink() {
        links.forEach(link => {
            // Check if the section corresponding to the link is in the viewport
            const targetId = link.getAttribute('href').substring(1); // Get the target section ID
            const targetSection = document.getElementById(targetId);

            if (isElementInViewport(targetSection)) {
                // Add 'active' class to the link if the section is in the viewport
                link.classList.add('active');
            } else {
                // Remove 'active' class if the section is not in the viewport
                link.classList.remove('active');
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight && rect.bottom >= 0;
    }

    // Monitoring each section
    const observerOptions = {
        root: null, 
        rootMargin: '1px',
        threshold: [0.25, 0.5, 0.75, 1.0] 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the section is in the viewport, highlight the corresponding nav link
                setActiveLink();
            }
        });
    }, observerOptions);

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });

    setActiveLink();
});




