const registrationForm = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const submitButton = document.getElementById('submitButton');


document.addEventListener('DOMContentLoaded', () => {
    const validatePassword = () => {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password.length >= 8) {
            passwordInput.classList.remove('invalid');
            passwordInput.classList.add('valid');
        } else {
            passwordInput.classList.remove('valid');
            passwordInput.classList.add('invalid');
        }

        if (password === confirmPassword && password.length >= 8) {
            confirmPasswordInput.classList.remove('invalid');
            confirmPasswordInput.classList.add('valid');
            submitButton.disabled = false;
        } else {
            confirmPasswordInput.classList.remove('valid');
            confirmPasswordInput.classList.add('invalid');
            submitButton.disabled = true;
        }
    };

    passwordInput.addEventListener('input', validatePassword);
    confirmPasswordInput.addEventListener('input', validatePassword);

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const registrationData = {
            name: nameInput.value,
            username: usernameInput.value,
            email: emailInput.value,
            password: passwordInput.value,
        };

        console.log(registrationData);
        alert(JSON.stringify(registrationData, null, 2));
    });
});
