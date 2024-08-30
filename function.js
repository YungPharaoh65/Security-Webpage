
//function that moves the page to that certain page
document.addEventListener('DOMContentLoaded', function() {
    // Select the button with the class 'startbtn'
    const startBtn = document.querySelector('.startbtn');

    // Add a click event listener to the button
    startBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior

        // Select the 'About Us' section
        const aboutUsSection = document.getElementById('about-us');
         
        // Scroll to the 'About Us' section smoothly
        aboutUsSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
