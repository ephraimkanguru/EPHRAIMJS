document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const age = document.getElementById('age').value;
        const gender = document.querySelector('input[name="gender"]:checked');
        const country = document.getElementById('country').value;
        const terms = document.getElementById('terms').checked;

        let isValid = true;

        // Name validation
        if (name === '') {
            showError('nameError', 'Name is required');
            isValid = false;
        }

        // Email validation
        if (!validateEmail(email)) {
            showError('emailError', 'Invalid email format');
            isValid = false;
        }

        // Password validation
        if (password.length < 8) {
            showError('passwordError', 'Password must be at least 8 characters long');
            isValid = false;
        }

        // Confirm Password validation
        if (password !== confirmPassword) {
            showError('confirmPasswordError', 'Passwords do not match');
            isValid = false;
        }

        // Age validation
        if (isNaN(age) || age < 18 || age > 100) {
            showError('ageError', 'Age must be a number between 18 and 100');
            isValid = false;
        }

        // Gender validation
        if (!gender) {
            showError('genderError', 'Gender is required');
            isValid = false;
        }

        // Country validation
        if (country === '') {
            showError('countryError', 'Please select your country');
            isValid = false;
        }

        // Terms validation
        if (!terms) {
            showError('termsError', 'You must agree to the terms and conditions');
            isValid = false;
        }

        if (isValid) {
            // Submit the form
            registrationForm.submit();
        }
    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        let isValid = true;

        // Email validation
        if (!validateEmail(email)) {
            showError('loginEmailError', 'Invalid email format');
            isValid = false;
        }

        // Password validation
        if (password === '') {
            showError('loginPasswordError', 'Password is required');
            isValid = false;
        }

        if (isValid) {
            // Submit the form
            loginForm.submit();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showError(elementId, message) {
        document.getElementById(elementId).textContent = message;
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.textContent = '');
    }
});

