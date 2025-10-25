
const frm = createSignUpForm();
document.addEventListener('DOMContentLoaded', function () {
    // ===== Create Form =====
    let title = addTitle('Sign Up');
    frm.appendChild(title);

    // ===== Create First Name Container 
    let fnamecont = createFormElement();

    // ===== Create Label =====
    let fnamelbl = document.createElement('label');
    fnamelbl.setAttribute('for', 'fname');
    fnamelbl.classList.add('form-label');
    fnamelbl.innerHTML = 'First Name';

    // ===== Create Input =====
    let fnameinp = document.createElement('input');
    fnameinp.classList.add('form-control');
    fnameinp.setAttribute('id', 'fname');
    fnameinp.setAttribute('name', 'fname');
    fnameinp.setAttribute('type', 'text');
    fnameinp.setAttribute('placeholder', 'Enter Your First Name');

    // ===== Adding input and label to container =====
    fnamecont.appendChild(fnamelbl);
    fnamecont.appendChild(fnameinp);
    frm.appendChild(fnamecont);

    ///////////////////////////////////////

    // ===== Create Second Name Container 
    let snamecont = createFormElement();

    // ===== Create Label =====
    let snamelbl = document.createElement('label');
    snamelbl.setAttribute('for', 'sname');
    snamelbl.classList.add('form-label');
    snamelbl.innerHTML = 'Last Name';

    // ===== Create Input =====
    let snameinp = document.createElement('input');
    snameinp.classList.add('form-control');
    snameinp.setAttribute('id', 'sname');
    snameinp.setAttribute('name', 'sname');
    snameinp.setAttribute('type', 'text');
    snameinp.setAttribute('placeholder', 'Enter Your Second Name');

    // ===== Adding input and label to container =====
    snamecont.appendChild(snamelbl);
    snamecont.appendChild(snameinp);
    frm.appendChild(snamecont);

    /////////////////////////////////////////

    // ===== Create Reg Email Container 
    let regemailcont = createFormElement();

    // ===== Create Label =====
    let regEmaillbl = document.createElement('label');
    regEmaillbl.setAttribute('for', 'regemail');
    regEmaillbl.classList.add('form-label');
    regEmaillbl.innerHTML = 'Email';

    // ===== Create Input =====
    let regEmailinp = document.createElement('input');
    regEmailinp.classList.add('form-control');
    regEmailinp.setAttribute('id', 'regemail');
    regEmailinp.setAttribute('name', 'email');
    regEmailinp.setAttribute('type', 'email');
    regEmailinp.setAttribute('placeholder', 'Enter Your Email');

    // ===== Adding input and label to container =====
    regemailcont.appendChild(regEmaillbl);
    regemailcont.appendChild(regEmailinp);
    frm.appendChild(regemailcont);

    /////////////////////////////////////////

    // ===== Create Gender Container =====
    let genderCont = createFormElement();

    // ===== Create Label ===== 
    let genderlbl = document.createElement('label');
    genderlbl.classList.add('form-label');
    genderlbl.setAttribute('for', 'gender');
    genderlbl.innerHTML = 'Gender';

    // ===== Create Select Menu =====
    let selectGender = document.createElement('select');
    selectGender.classList.add('w-100', 'p-2', 'form-control');
    selectGender.setAttribute('id', 'gender');
    selectGender.setAttribute('name', 'gender');

    // ===== Create Options for Select =====
    let optmale = document.createElement('option');
    optmale.setAttribute('value', 'male');
    optmale.innerHTML = 'Male';
    let optfemale = document.createElement('option');
    optfemale.setAttribute('value', 'female');
    optfemale.innerHTML = 'Female';

    // ===== Adding Input and Label =====
    selectGender.appendChild(optmale);
    selectGender.appendChild(optfemale);
    genderCont.appendChild(genderlbl);
    genderCont.appendChild(selectGender);
    frm.appendChild(genderCont);

    /////////////////////////////////

    // ===== Create Phone Container 
    let phoneCont = createFormElement();

    // ===== Create Label =====
    let phonelbl = document.createElement('label');
    phonelbl.setAttribute('for', 'phone');
    phonelbl.classList.add('form-label');
    phonelbl.innerHTML = 'Phone';

    // ===== Create Input =====
    let phoneinp = document.createElement('input');
    phoneinp.classList.add('form-control');
    phoneinp.setAttribute('id', 'phone');
    phoneinp.setAttribute('name', 'phone');
    phoneinp.setAttribute('type', 'tel');
    phoneinp.setAttribute('placeholder', '+20 1234567890');

    // ===== Adding input and label to container =====
    phoneCont.appendChild(phonelbl);
    phoneCont.appendChild(phoneinp);
    frm.appendChild(phoneCont);

    //////////////////////////////////

    // ===== Create Address Container 
    let addressCont = createFormElement();

    // ===== Create Label =====
    let addresslbl = document.createElement('label');
    addresslbl.setAttribute('for', 'address');
    addresslbl.classList.add('form-label');
    addresslbl.innerHTML = 'Address';

    // ===== Create Input =====
    let addressinp = document.createElement('input');
    addressinp.classList.add('form-control');
    addressinp.setAttribute('id', 'address');
    addressinp.setAttribute('name', 'address');
    addressinp.setAttribute('type', 'text');
    addressinp.setAttribute('placeholder', 'Address');

    // ===== Adding input and label to container =====
    addressCont.appendChild(addresslbl);
    addressCont.appendChild(addressinp);
    frm.appendChild(addressCont);

    //////////////////////////////////////

    // ===== Create Password Container 
    let passCont = createFormElement();

    // ===== Create Label =====
    let passlbl = document.createElement('label');
    passlbl.setAttribute('for', 'regpass');
    passlbl.classList.add('form-label');
    passlbl.innerHTML = 'Password';

    // ===== Create Input =====
    let passinp = document.createElement('input');
    passinp.classList.add('form-control');
    passinp.setAttribute('id', 'regpass');
    passinp.setAttribute('name', 'regPass');
    passinp.setAttribute('type', 'password');
    passinp.setAttribute('placeholder', 'Enter Password');

    // ===== Adding input and label to container =====
    passCont.appendChild(passlbl);
    passCont.appendChild(passinp);
    frm.appendChild(passCont);

    /////////////////////////////////

    // ===== Create Confirm Password Container 
    let confpassCont = createFormElement();

    // ===== Create Label =====
    let confpasslbl = document.createElement('label');
    confpasslbl.setAttribute('for', 'confirmregpass');
    confpasslbl.classList.add('form-label');
    confpasslbl.innerHTML = 'Confirm Password';

    // ===== Create Input =====
    let confpassinp = document.createElement('input');
    confpassinp.classList.add('form-control');
    confpassinp.setAttribute('id', 'confirmregpass');
    confpassinp.setAttribute('name', 'confirmregpass');
    confpassinp.setAttribute('type', 'password');
    confpassinp.setAttribute('placeholder', 'Confirm Password');

    // ===== Adding input and label to container =====
    confpassCont.appendChild(confpasslbl);
    confpassCont.appendChild(confpassinp);
    frm.appendChild(confpassCont);

    //////////////////////////////////////

    let submition = document.createElement('button');
    submition.classList.add('btn', 'btn-primary', 'bt', 'w-100', 'mb-3');
    submition.setAttribute('type', 'submit');
    submition.innerHTML = 'Sign Up';
    frm.appendChild(submition);
    ////////////////////////

    // ===== TO Log in =====
    let tologIn = document.createElement('div');
    tologIn.classList.add('mb-3');
    tologIn.innerHTML = `already have an acount? <a href="../Login/login.html">Log In</a>`
    frm.appendChild(tologIn);

    /////////////////////////

    const container = document.querySelector('.sign-up');
    if (container) container.appendChild(frm);

    /////////////////////////

    var id = 0;
// ===== Form Submission Handler =====
frm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Check if passwords match
    if (passinp.value !== confpassinp.value) {
        alert('Passwords do not match!');
        return;
    }

    // Collect form data
    const user = {
        ID: id,
        firstName: fnameinp.value,
        lastName: snameinp.value,
        email: regEmailinp.value,
        gender: selectGender.value,
        phone: phoneinp.value,
        address: addressinp.value,
        password: passinp.value
    };
    id++;
    // Get existing users or initialize empty array
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign up successful!');
    frm.reset();
    console.log('Sign up data:', user);

    // Add your registration logic here
    alert('Sign up successful!');
});

})

///////////////////////////


///////////////////////////

function createSignUpForm() {
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