document.addEventListener("DOMContentLoaded", function () {
    // Ensure the page loads with no active sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections initially
    });

    // Function to show the section based on its id
    function showSection(id) {
        sections.forEach(section => {
            section.style.display = 'none'; // Hide all sections
            section.classList.remove('active');
        });

        const targetSection = document.getElementById(id);
        targetSection.style.display = 'block'; // Show the selected section
        targetSection.classList.add('active'); // Add active class for styling (optional)
    }

    // Set the default section to 'home' when the page loads
    showSection('home');

    // Add event listeners for navigation links
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Get the target section ID from the link's href attribute
            const targetSectionId = this.getAttribute('href').substring(1);
            
            // Show the clicked section
            showSection(targetSectionId);

            // Smooth scroll to the section
            const targetSection = document.getElementById(targetSectionId);
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Add smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Footer information toggle (optional functionality)
    const footer = document.querySelector('footer');
    const footerText = document.createElement('p');
    footerText.innerText = '© 2024 Your Organization. All rights reserved.';
    footer.appendChild(footerText);

    // Optional: Display current year dynamically
    const yearSpan = document.createElement('span');
    yearSpan.innerText = new Date().getFullYear();
    footerText.appendChild(yearSpan);

    // If the footer is hidden and needs to be shown when the user scrolls to the bottom
    window.addEventListener('scroll', function () {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            footer.style.display = 'block'; // Show footer when the user scrolls to the bottom
        }
    });
});
