let loginBtn = document.getElementById('loginBtn');
let headingEl = document.getElementById('heading');
let myForm = document.getElementById('myForm');
let loginCard = document.getElementById('loginCard');
let buttonCon = document.getElementById('buttonCon');

function gotoLoginPage(logoutAnc, TABtn) {
    logoutAnc.classList.add("d-none");
    TABtn.classList.add('d-none');
    headingEl.textContent = 'Create Account';
    let emailLabel = document.createElement('label');
    emailLabel.classList.add("label", "mb-0");
    emailLabel.textContent = "Email";
    emailLabel.setAttribute('for', 'email');
    loginCard.appendChild(emailLabel);

    let emailInput = document.createElement('input');
    emailInput.classList.add("form-control", "input", "mb-3");
    emailInput.placeholder = "Type your email";
    emailInput.id = "email";
    loginCard.appendChild(emailInput);

    let passwordlLabel = document.createElement('label');
    passwordlLabel.classList.add("label", "mb-0");
    passwordlLabel.textContent = "Password";
    passwordlLabel.setAttribute('for', 'password');
    loginCard.appendChild(passwordlLabel);

    let passwordInput = document.createElement('input');
    passwordInput.classList.add("form-control", "input", "mb-3");
    passwordInput.placeholder = "Type your password";
    passwordInput.id = "password";
    loginCard.appendChild(passwordInput);

    let divEl2 = document.createElement('div');
    divEl2.classList.add("text-center");
    loginCard.appendChild(divEl2);

    let logoutBtn = document.createElement('button');
    logoutBtn.classList.add("btn", "btn-outline-primary", "button");
    logoutBtn.textContent = "Login";
    divEl2.appendChild(logoutBtn);


}

function attandance() {
    myForm.textContent = "";
    headingEl.textContent = "Face recognition for tracking attandance.";
    loginBtn.classList.add("d-none");

    let TABtn = document.createElement('button');
    TABtn.classList.add("btn", "btn-outline-primary", "button");
    TABtn.textContent = "Track attandance";
    buttonCon.appendChild(TABtn);


    let divEl = document.createElement('div');
    divEl.classList.add("text-right");
    loginCard.appendChild(divEl);

    let logoutAnc = document.createElement('a');
    logoutAnc.classList.add("anchor");
    logoutAnc.textContent = "Logout";
    divEl.appendChild(logoutAnc);

    logoutAnc.onclick = function() {
        gotoLoginPage(logoutAnc, TABtn);
    };
}

loginBtn.addEventListener('click', attandance);
