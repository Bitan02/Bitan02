// Scroll Animation
document.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    const fadeIns = document.querySelectorAll(".fade-in");
    fadeIns.forEach((fadeIn) => {
        const rect = fadeIn.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            fadeIn.classList.add("visible");
        }
    });
});

// JavaScript to handle the click and show enlarged image
const profilePicture = document.querySelector('.profile-picture');
const enlargedProfile = document.getElementById('enlargedProfile');

profilePicture.addEventListener('click', () => {
    enlargedProfile.classList.add('active'); // Show the enlarged image
});

enlargedProfile.addEventListener('click', () => {
    enlargedProfile.classList.remove('active'); // Hide the enlarged image when clicked
});


// Select elements
const profileImg = document.getElementById('profile-img');
const profileLinkContainer = document.getElementById('profile-link-container');
const copyButton = document.getElementById('copy-button');
const profileLinkInput = document.getElementById('profile-link');

// Show the link when the profile image is clicked
profileImg.addEventListener('click', function() {
    profileLinkContainer.classList.toggle('hidden'); // Show/hide the link container
});

// Copy the link when the copy button is clicked
copyButton.addEventListener('click', function() {
    profileLinkInput.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!'); // Notify the user
});
