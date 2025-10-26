document.addEventListener('DOMContentLoaded', function () {
    const userData = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '[]');
    // Create form
    let frm = createLoginForm();
    let frmTitle = addTitle('Log in');
    frm.appendChild(frmTitle);

    // ===== EMAIL SECTION =====
    let logEmail = createFormElement();
    let lblEmail = document.createElement('label');
    lblEmail.classList.add('form-label');
    lblEmail.setAttribute('for', 'loginemail');
    lblEmail.innerHTML = 'Email';

    let inpEmail = document.createElement('input');
    inpEmail.classList.add('form-control');
    inpEmail.setAttribute('id', 'loginemail'); // Fixed: use setAttribute for id
    inpEmail.setAttribute('type', 'email');
    inpEmail.setAttribute('placeholder', 'Enter your Email');
    inpEmail.setAttribute('required', ''); // Good practice

    logEmail.appendChild(lblEmail);
    logEmail.appendChild(inpEmail);
    frm.appendChild(logEmail);

    // ===== PASSWORD SECTION =====
    let logPass = createFormElement(); // Fixed: was logEmail before
    let lblPass = document.createElement('label'); // Fixed: new variable name
    lblPass.classList.add('form-label');
    lblPass.setAttribute('for', 'loginpass');
    lblPass.innerHTML = 'Password'; // Fixed: was "Email"

    let inpPass = document.createElement('input');
    inpPass.classList.add('form-control');
    inpPass.setAttribute('id', 'loginpass'); // Fixed: use setAttribute for id
    inpPass.setAttribute('type', 'password');
    inpPass.setAttribute('placeholder', 'Enter your Password');
    inpPass.setAttribute('required', ''); // Good practice

    logPass.appendChild(lblPass); // Fixed: was logEmail
    logPass.appendChild(inpPass); // Fixed: was inpEmail
    frm.appendChild(logPass); // Fixed: was logEmail

    // ===== Checkbox Button =====
    let rememberBox = createFormElement();
    let inpCheck = document.createElement('input');
    inpCheck.classList.add('form-check-input', 'me-2');
    inpCheck.setAttribute('type', 'checkbox');
    inpCheck.setAttribute('name', 'remember-me');
    inpCheck.setAttribute('id', 'remember-me');
    inpCheck.setAttribute('checked', '');

    let rememberlbl = document.createElement('label');
    rememberlbl.classList.add('form-label');
    rememberlbl.setAttribute('for', 'remember-me');
    rememberlbl.innerHTML = 'Remember Me'

    rememberBox.appendChild(inpCheck);
    rememberBox.appendChild(rememberlbl);
    frm.appendChild(rememberBox);


    // ===== SUBMIT BUTTON =====
    let btnContainer = createFormElement();
    let submitBtn = document.createElement('button');
    submitBtn.classList.add('btn', 'btn-primary', 'w-100');
    submitBtn.setAttribute('type', 'submit');
    submitBtn.innerHTML = 'Login';
    btnContainer.appendChild(submitBtn);
    frm.appendChild(btnContainer);

    // ===== TO SignUp =====
    let toSign = document.createElement('div');
    toSign.classList.add('mb-2');
    toSign.innerHTML = `You don't have account? <a href="../Signup/signup.html">Sign Up Now</a>`
    frm.appendChild(toSign);

    // Append form to page
    const container = document.querySelector('.log-in');
    if (container) container.appendChild(frm);

    // ===== FORM SUBMISSION HANDLER =====
    frm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = inpEmail.value;
        const password = inpPass.value;
        let idx = userData.findIndex(x => x.email === email);
        function isFound(idx, password) {
            return userData[idx].password === password;
        }

        if (idx !==-1 && isFound(idx, password)) {
            const cUser = userData[idx];
            localStorage.setItem('currentUser', JSON.stringify(cUser));
            // Redirect or success action here
            window.location.href = '../../Home/home.html';
            // alert('Login successful!');
        } else {
            console.log(userData);
            alert('Wrong email or password');
            frm.reset();
        }
    });
});


function createLoginForm() {
    const frm = document.createElement('form');
    frm.classList.add('login-form');
    return frm;
}

function addTitle(title) {
    const t = document.createElement('h3');
    t.classList.add('text-center');
    t.innerHTML = title;
    return t;
}

function createFormElement() {
    const t = document.createElement('div');
    t.classList.add('mb-3');
    return t;
}