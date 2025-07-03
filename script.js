// Get all elements
const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const main = document.querySelector('.main');
const videoSection = document.querySelector('.video-section');
const videoContainer = document.querySelector('.video-container');
const videoInfo = document.querySelector('.video-info');
const relatedVideos = document.querySelector('.related-videos');
const footer = document.querySelector('.footer');

// Add event listeners
nav.addEventListener('mouseover', () => {
    nav.classList.add('smooth-transition');
});

nav.addEventListener('mouseout', () => {
    nav.classList.remove('smooth-transition');
});

// Add fade-in animation to main content
main.classList.add('fade-in');

// Add smooth transition to video container
videoContainer.classList.add('smooth-transition');

// Add event listener to video info
videoInfo.addEventListener('mouseover', () => {
    videoInfo.classList.add('smooth-transition');
});

videoInfo.addEventListener('mouseout', () => {
    videoInfo.classList.remove('smooth-transition');
});

// Add fade-in animation to related videos
relatedVideos.classList.add('fade-in');

// Add smooth transition to footer
footer.classList.add('smooth-transition');

// Error handling
try {
    // Code to be executed
} catch (error) {
    console.error('Error:', error);
}

// User feedback
console.log('Welcome to the YouTube Clone!');