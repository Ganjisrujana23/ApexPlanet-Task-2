
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const message = document.getElementById("message");

function showMessage(text, color = "green") {
    message.textContent = text;
    message.style.color = color;
}

function clearMessage() {
    message.textContent = "";
}

function showLogin() {
    loginForm.hidden = false;
    registerForm.hidden = true;
    loginTab.classList.add("active");
    registerTab.classList.remove("active");
    clearMessage();
}

function showRegister() {
    loginForm.hidden = true;
    registerForm.hidden = false;
    registerTab.classList.add("active");
    loginTab.classList.remove("active");
    clearMessage();
}

loginTab.addEventListener("click", showLogin);
registerTab.addEventListener("click", showRegister);

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!loginForm.checkValidity()) {
        loginForm.reportValidity();
        return;
    }

    const password = document.getElementById("loginPassword").value;

if (password === "Demo123!") {
    showMessage("Demo login successful!");
} else {
    showMessage("Incorrect demo password. Please try again.", "red");
}
});

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!registerForm.checkValidity()) {
        registerForm.reportValidity();
        return;
    }

    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        showMessage("Passwords do not match. Please try again.", "red");
        return;
    }

    showMessage("Registration form validated successfully! This is a frontend demo.");
});

document.querySelectorAll(".toggle-password").forEach(function (button) {
    button.addEventListener("click", function () {
        const targetId = button.dataset.target;
        const passwordInput = document.getElementById(targetId);

        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            button.textContent = "Hide";
        } else {
            passwordInput.type = "password";
            button.textContent = "Show";
        }
    });
});