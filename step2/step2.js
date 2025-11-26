const done = localStorage.getItem('completeStep1')
if(!done){
    window.location.href = '../sign Up/signup.html'
}
const tunjiConfirm = JSON.parse(localStorage.getItem('myConfirm')) || []
// const firstSign = JSON.parse(localStorage.getItem('tunji')) || []


const signUpButton = () => {

    if (eMail.value.trim() === "" || nin.value.trim() === "" || bvn.value.trim() === "" || phone.value.trim() === "" || pin.value.trim() === "" || userPassword.value.trim() === "" || userConfirmPassword.value.trim() === "") {
        showError.style.display = 'block'
    } else {
        showError.style.display = 'none'
        const userAccName = JSON.parse(localStorage.getItem('currentLoggedInUser'))
        const tunjiConfirmobj = {
            mail: eMail.value.trim(),
            ni: nin.value.trim(),
            bi: bvn.value.trim(),
            pho: phone.value.trim(),
            pinn: pin.value.trim(),
            pass: userPassword.value.trim(),
            c_pass: userConfirmPassword.value.trim(),
            accName: userAccName,
            balance: 5000,
            bank: 'Tunji-Pay'
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const validEmail = emailRegex.test(tunjiConfirmobj.mail)
        if (validEmail) {
            const mailExist = tunjiConfirm.find(user => user.mail === tunjiConfirmobj.mail)
            if (!mailExist) {
                const ninBvnRegex = /^[0-9]{11}$/
                const bothValid = ninBvnRegex.test(tunjiConfirmobj.ni) && ninBvnRegex.test(tunjiConfirmobj.bi)
                if (bothValid) {
                    const ninBvnExist = tunjiConfirm.find(user => user.ni === tunjiConfirmobj.ni || user.bi === tunjiConfirmobj.bi)
                    if (ninBvnExist) {
                        showNinBvn.style.display = 'block'
                        showMailError.style.display = 'none'
                        showPinConfirmation.style.display = 'none'
                        showPasswordError.style.display = 'none'
                        showValidPin.style.display = 'none'
                        showPhoneExist.style.display = 'none'
                        showInvalidPhone.style.display = 'none'
                        showNinBvnValid.style.display = 'none'
                        showMailExist.style.display = 'none'
                    } else {
                        const phoneRegex = /^0\d{10}$/
                        const validPhone = phoneRegex.test(tunjiConfirmobj.pho)
                        if (validPhone) {
                            const existPhone = tunjiConfirm.find(user => user.pho === tunjiConfirmobj.pho)
                            if (!existPhone) {
                                const pinRegex = /^\d{4}$/
                                const validPin = pinRegex.test(tunjiConfirmobj.pinn)
                                if (validPin) {
                                    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                                    const validPassword = passwordRegex.test(tunjiConfirmobj.pass)
                                    if (validPassword) {
                                        if (tunjiConfirmobj.pass === tunjiConfirmobj.c_pass) {
                                            signUp.innerHTML = `
                                            <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                            <span class="visually-hidden" role="status">Loading...</span>
                                           `
                                            const customerName = JSON.parse(localStorage.getItem('currentLoggedInUser'))
                                            alert(`Dear ${customerName} You've created an account sucessfully`)
                                            tunjiConfirm.push(tunjiConfirmobj)
                                            localStorage.setItem('myConfirm', JSON.stringify(tunjiConfirm))
                                        


                                            setTimeout(() => { window.location.href = '../sign in/signin.html' }, 2000)
                                        } else {
                                            showPinConfirmation.style.display = 'block'
                                            showPasswordError.style.display = 'none'
                                            showValidPin.style.display = 'none'
                                            showPhoneExist.style.display = 'none'
                                            showInvalidPhone.style.display = 'none'
                                            showNinBvnValid.style.display = 'none'
                                            showMailExist.style.display = 'none'
                                            showMailError.style.display = 'none'
                                            showNinBvn.style.display = 'none'








                                        }
                                    } else {
                                        showPasswordError.style.display = 'block'
                                        showPinConfirmation.style.display = 'none'
                                        showValidPin.style.display = 'none'
                                        showPhoneExist.style.display = 'none'
                                        showInvalidPhone.style.display = 'none'
                                        showNinBvnValid.style.display = 'none'
                                        showMailExist.style.display = 'none'
                                        showMailError.style.display = 'none'
                                        showNinBvn.style.display = 'none'


                                    }

                                } else {
                                    showValidPin.style.display = 'block'
                                    showPinConfirmation.style.display = 'none'
                                    showPasswordError.style.display = 'none'
                                    showPhoneExist.style.display = 'none'
                                    showInvalidPhone.style.display = 'none'
                                    showNinBvnValid.style.display = 'none'
                                    showMailExist.style.display = 'none'
                                    showMailError.style.display = 'none'
                                    showNinBvn.style.display = 'none'


                                }

                            } else {
                                showPhoneExist.style.display = 'block'
                                showPinConfirmation.style.display = 'none'
                                showPasswordError.style.display = 'none'
                                showValidPin.style.display = 'none'
                                showInvalidPhone.style.display = 'none'
                                showNinBvnValid.style.display = 'none'
                                showMailExist.style.display = 'none'
                                showMailError.style.display = 'none'
                                showNinBvn.style.display = 'none'


                            }
                        } else {
                            showInvalidPhone.style.display = 'block'
                            showPinConfirmation.style.display = 'none'
                            showPasswordError.style.display = 'none'
                            showValidPin.style.display = 'none'
                            showPhoneExist.style.display = 'none'
                            showNinBvnValid.style.display = 'none'
                            showMailExist.style.display = 'none'
                            showMailError.style.display = 'none'
                            showNinBvn.style.display = 'none'


                        }
                    }
                } else {
                    showNinBvnValid.style.display = 'block'
                    showPinConfirmation.style.display = 'none'
                    showPasswordError.style.display = 'none'
                    showValidPin.style.display = 'none'
                    showPhoneExist.style.display = 'none'
                    showInvalidPhone.style.display = 'none'
                    showMailExist.style.display = 'none'
                    showMailError.style.display = 'none'
                    showNinBvn.style.display = 'none'


                }



            } else {
                showMailExist.style.display = 'block'
                showPinConfirmation.style.display = 'none'
                showPasswordError.style.display = 'none'
                showValidPin.style.display = 'none'
                showPhoneExist.style.display = 'none'
                showInvalidPhone.style.display = 'none'
                showNinBvnValid.style.display = 'none'
                showMailError.style.display = 'none'
                showNinBvn.style.display = 'none'


            }

        } else {
            showMailError.style.display = 'block'
            showPinConfirmation.style.display = 'none'
            showPasswordError.style.display = 'none'
            showValidPin.style.display = 'none'
            showPhoneExist.style.display = 'none'
            showInvalidPhone.style.display = 'none'
            showNinBvnValid.style.display = 'none'
            showMailExist.style.display = 'none'
            showNinBvn.style.display = 'none'



        }



    }
}

showPass.addEventListener('click', ()=> {
    // console.log(userPassword.value.trim());
    if(userPassword.type == 'password'){
        userPassword.type = 'text'
        showPass.textContent = 'Hide'
        
    }else{
         userPassword.type = 'password'
        showPass.textContent = 'Show'
    }

})

showPass2.addEventListener('click', ()=> {
    // console.log(userConfirmPassword.value.trim());
    if(userConfirmPassword.type == 'password'){
        userConfirmPassword.type = 'text'
        showPass2.textContent = 'Hide'
        
    }else{
         userConfirmPassword.type = 'password'
        showPass2.textContent = 'Show'
    }

})