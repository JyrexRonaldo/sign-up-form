const pwdInputs = [...document.querySelectorAll("input[type='password']")]

pwdInputs.forEach((input) => {
    input.addEventListener('change', () => {
        if (pwdInputs[0].value !== pwdInputs[1].value) {
            pwdInputs.forEach(inputs => {
                inputs.classList.add("error");
            })
        } else if (pwdInputs[0].value === pwdInputs[1].value) {
            pwdInputs.forEach(inputs => {
                inputs.classList.remove("error");
            })
        }
    })
})