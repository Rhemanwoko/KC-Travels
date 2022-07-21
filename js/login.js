// EMAIL VALIDATION FUNCTION
function validation() {
    const form = document.getElementById('form');
    const emailInput = document.getElementById('email-input').value;

    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;  //Regex for Email address pattern
    const errorMessage = document.getElementById('email-error');


    if (emailInput.match(pattern)) {
        errorMessage.innerHTML = '';
    } else {
        errorMessage.innerHTML = 'Enter a valid email address';
        errorMessage.style.color = '#EB1414';
    }
    if (emailInput == '') {
        errorMessage.innerHTML = ''
    }
}

// PASSWORD VALIDATION FUNCTION
function passwordValidation() {
    const form = document.getElementById('form');
    const passwordInput = document.getElementById('password-input').value;
    const passwordInputBox = document.getElementById('password-input');

    const errorMessageForPassword = document.getElementById('password-error');


    if (passwordInput.length >= 7) {
        errorMessageForPassword.innerHTML = '';
        passwordInputBox.style.border = "none"
    } else {
        errorMessageForPassword.innerHTML = 'Please enter a valid password';
        errorMessageForPassword.style.color = '#EB1414';
        passwordInputBox.style.border = "0.5px solid #EB1414"
        
    }
    if (passwordInput == '') {
        errorMessageForPassword.innerHTML = '';
        passwordInputBox.style.border = "none"
    }
}

// VIEW PASSWORD TOGGLE FUNCTION
function togglePassword () {
    const password = document.getElementById('password-input');
    const eyeOpen = document.querySelector('.eye-open');
    const eyeClosed = document.querySelector('.eye-closed');

    if (password.type === 'password') {
        password.type = 'text';
        eyeOpen.style.display = 'block';
        eyeClosed.style.display = "none";
        eyeOpen.style.color = "black";
    } else {
        password.type = 'password';
        eyeOpen.style.display = 'none';
        eyeClosed.style.display = "block";
        eyeClosed.style.color = "black";

    }
}