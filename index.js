function registerValidate(e) {
    let terms = document.getElementsByName('termsAndConditions')
    console.log('terms')
}

function login() {
    let message = document.querySelector('.message')
    message.removeAttribute('hidden')
    message.innerHTML = 'Invalid user or password'
}