document.addEventListener('DOMContentLoaded', function() {
    // Get the button elements
    var validateButton = document.getElementById('validateButton');

    // Attach the click event listener to the button
    validateButton.addEventListener('click', validateForm);
});

function validateForm() {
    // Get the input values
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Regular expressions for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Regular expressions for password validation
    var specialCharRegex = /[^@A-Za-z0-9]/; // Exclude special characters other than @
    var uppercaseRegex = /[A-Z]/; // Require at least one uppercase letter
    var numberRegex = /[0-9]/; // Require at least one number

    // Check if both email and password meet the criteria
    if (emailRegex.test(email) && !specialCharRegex.test(password) && uppercaseRegex.test(password) && numberRegex.test(password)) {
        alert('Valid email and password!');
    } else {
        alert('Invalid email or password! Please enter valid credentials.');
    }
}