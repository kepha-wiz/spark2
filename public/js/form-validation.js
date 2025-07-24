document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");
    const errorMessage = document.querySelector("#error-message");
    const successMessage = document.querySelector("#success-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        let valid = true;
        errorMessage.textContent = "";
        successMessage.textContent = "";

        if (nameInput.value.trim() === "") {
            valid = false;
            errorMessage.textContent += "Name is required. ";
        }

        if (emailInput.value.trim() === "") {
            valid = false;
            errorMessage.textContent += "Email is required. ";
        } else if (!validateEmail(emailInput.value.trim())) {
            valid = false;
            errorMessage.textContent += "Please enter a valid email address. ";
        }

        if (messageInput.value.trim() === "") {
            valid = false;
            errorMessage.textContent += "Message is required. ";
        }

        if (valid) {
            successMessage.textContent = "Your message has been sent successfully!";
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});