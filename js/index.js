const pwdInputs = [...document.querySelectorAll("input[type='password']")]
const errorMessage = document.querySelector('span');

pwdInputs.forEach((input) => {
    input.addEventListener('change', () => {
        if (pwdInputs[0].value !== pwdInputs[1].value) {
            pwdInputs[0].classList.add("error");
            pwdInputs[1].classList.add("error");
            errorMessage.classList.add("error-message");
        } else if (pwdInputs[0].value === pwdInputs[1].value) {
            pwdInputs[0].classList.remove("error");
            pwdInputs[1].classList.remove("error");
            errorMessage.classList.remove("error-message");
        }
    })
})