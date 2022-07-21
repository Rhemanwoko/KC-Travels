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