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


const submit = document.getElementById('submit');
submit.addEventListener("click", validate);

function validate(e){
    e.preventDefault();

    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    const matchInput = document.getElementById('match-input');
    let valid = true;

    if(!emailInput.value){
        const errorMessage = document.getElementById('email-error')
        errorMessage.innerHTML = 'Enter a valid email address';
        errorMessage.style.color = '#EB1414';
        
    }
    if(!passwordInput.value){
        const errorMessageForPassword = document.querySelector('.password-error')
        errorMessageForPassword.innerHTML = 'Please enter a valid password';
        errorMessageForPassword.style.color = '#EB1414';
    }
    if(!matchInput.value){
        const errorMessageForPassword = document.querySelector('.password-error')
        errorMessageForPassword.innerHTML = 'Confirm Password'
        errorMessageForPassword.style.color = '#EB1414'
    }
    if(matchInput.value != passwordInput.value){
        const errorMessageForPassword = document.querySelector('.password-error')
        errorMessageForPassword.innerHTML = 'Passwords did not match'
        errorMessageForPassword.style.color = '#EB1414'
    }
    if(emailInput.value == ''){
        const errorMessageForPassword = document.querySelector('.password-error')
        errorMessageForPassword.innerHTML = 'Please enter a valid email address';
        errorMessageForPassword.style.color = '#EB1414';
    }
    if(passwordInput.value == ''){
        const errorMessageForPassword = document.querySelector('.password-error')
        errorMessageForPassword.innerHTML = 'Please enter a valid password';
        errorMessageForPassword.style.color = '#EB1414';
    }
    if(matchInput.value == ''){
        const errorMessageForPassword = document.querySelector('.password-error')
    }
    else{
        window.location.href = 'resetpassword.html';
    }

    return valid;
}



// PASSWORD VALIDATION FUNCTION
function passwordValidation() {
    const form = document.getElementById('form');
    const passwordInput = document.getElementById('password-input').value;
    const passwordInputBox = document.getElementById('password-input');

    const errorMessageForPassword = document.querySelector('.password-error');


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
//PASSWORD MATCHING FUNCTION
function passwordMatch(){
    const form = document.getElementById('form');
    const passwordInput = document.getElementById('password-input').value;
    const matchInput = document.getElementById('match-input').value;
    const matchInputBox = document.getElementById('match-input');

    const errorMessageForPassword = document.querySelector('.password-error');

    if(passwordInput == matchInput){
        errorMessageForPassword.innerHTML = ''
        matchInputBox.style.border = "none" 
    } else{
        errorMessageForPassword.innerHTML = 'Passwords did not match'
        errorMessageForPassword.style.color = '#EB1414'
        matchInputBox.style.border = "0.5px solid #EB1414"
    } 
    if(matchInput == ''){
        errorMessageForPassword.innerHTML = ''
        matchInputBox.style.border = "none"
    }
}

// VIEW PASSWORD TOGGLE FUNCTION
function togglePassword () {
    const password = document.getElementById('password-input');
    const matchInput = document.getElementById('match-input');
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

function toggleMatch () {
    const password = document.getElementById('match-input');
    const eyeOpen = document.querySelector('.eye-opened');
    const eyeClosed = document.querySelector('.eye-close');

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