//1. add click eventHandler with submit button
document.getElementById('btn-submit').addEventListener('click', function(event){
    // 2. get the email inputField so that we can get it's value if someone insert's his/her email Address
    const emailInput = document.getElementById('email-input');
    // 3. this the email we needed from email input field.
    const email = emailInput.value;
    console.log(email)

    // 4. get the password field via id/tagName/querySelector and so on
    const passwordInput = document.getElementById('password-input')
    // 5. and get the value of it
    const password = passwordInput.value;
    console.log(password)

    if( email === 'abir@gmail.com' && password === 'abir'){
        window.location = 'bank.html'
    }else{
        alert('Wrong password or email');
    }

});