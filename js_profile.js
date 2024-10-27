
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('textarea').value.trim();

    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (message === '') {
        alert('Please enter a message.');
        return;
    }

    alert('Form submitted successfully!');
});

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
