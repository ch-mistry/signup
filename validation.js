function clearError() {
    document.getElementById('name_error').innerHTML = '';
    document.getElementById('username_error').innerHTML = '';
    document.getElementById('email_error').innerHTML = '';
    document.getElementById('password_error').innerHTML = '';
    document.getElementById('cpass_error').innerHTML = '';
    document.getElementById('submit').disabled = false;
    border = document.getElementsByClassName('form-control');
    for (let item of border) {
        item.classList.remove('border-danger');
        item.classList.add('border-success');
    }
}
function seterror(id, error) {
    element = document.getElementById(id);
    element.innerHTML = error;
    element.closest('.row').querySelector('.form-control').classList.add('border-danger');
}
function validate() {
    var returnval = true;
    clearError();
    var name = document.forms['signup']['name'].value;
    var username = document.forms['signup']['username'].value;
    var email = document.forms['signup']['email'].value;
    var password = document.forms['signup']['password'].value;
    var cpassword = document.forms['signup']['cpassword'].value;
    var usernameRegex = /[a-zA-Z0-9]/;
    var emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

    if (name.length == 0 || name.trim() === '') {
        seterror('name_error','*Name is required');
        returnval = false;
    }

    if (username.length == 0 || username.trim() === '') {
        seterror('username_error','*Username is required');
        returnval = false;
    } else if (username.length > 20 || username.length < 6) {
        seterror('username_error','*Username must be of 6-20 characters');
        returnval = false;
    } else if (!username.match(usernameRegex)) {
        seterror('username_error','*Username must contain atleast one character and one number');
        returnval = false;
    }

    if (email.length == 0 || email.trim() === '') {
        seterror('email_error','*Email is required');
        returnval = false;
    } else if (!email.match(emailRegex)) {
        seterror('email_error','*Email is not valid');
        returnval = false;
    }

    if (password.length == 0) {
        seterror('password_error','*Password is required');
        seterror('cpass_error','');
        returnval = false;
    }
    else if (password.length < 8) {
        seterror('password_error','*Password should be atleast 8 characters');
        seterror('cpass_error','');
        returnval = false;
    }
    else if (cpassword != password) {
        seterror('cpass_error','*Password and Confirm Password should match');
        returnval = false;
    }

    if(returnval == false) {
        document.getElementById('submit').disabled = true;
    }

    return returnval;
}