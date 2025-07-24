// This file simulates client-side authentication for the student login page.

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageBox = document.getElementById('message-box');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            displayMessage('Please fill in both fields.', 'error');
            return;
        }

        // Simulate authentication (replace with real authentication logic)
        if (username === 'student' && password === 'password123') {
            displayMessage('Login successful! Redirecting...', 'success');
            setTimeout(() => {
                window.location.href = 'dashboard.html'; // Redirect to student dashboard
            }, 2000);
        } else {
            displayMessage('Invalid username or password.', 'error');
        }
    });

    function displayMessage(message, type) {
        messageBox.textContent = message;
        messageBox.className = type; // 'success' or 'error'
        messageBox.style.display = 'block';
    }
});