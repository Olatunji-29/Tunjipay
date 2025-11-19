
const prev = JSON.parse(localStorage.getItem('tunji'))
const tunjiConfirm = JSON.parse(localStorage.getItem('tunjiCon')) || []

const signUpButton = () => {

    if (eMail.value.trim() === "" || nin.value.trim() === "" || bvn.value.trim() === "" || phone.value.trim() === "" || pin.value.trim() === "" || userPassword.value.trim() === "" || userConfirmPassword.value.trim() === "") {
        showError.style.display = 'block'
    } else {
        showError.style.display = 'none'
        const tunjiConfirmobj = {
            mail: eMail.value,
            ni: nin.value,
            bi: bvn.value,
            pho: phone.value,
            pinn: pin.value,
            pass: userPassword.value,
            c_pin: userConfirmPassword.value
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const validEmail = emailRegex.test(tunjiConfirmobj.mail)
        if (validEmail) {
            const ninBvnRegex = /^[0-9]{11}$/
            const bothValid = ninBvnRegex.test(tunjiConfirmobj.ni) && ninBvnRegex.test(tunjiConfirmobj.bi)
            if (bothValid) {
                const phoneRegex = /^\d{11}$/;
                const validPhone = phoneRegex.test(tunjiConfirmobj.pho);
                if (validPhone) {
                    const pinRegex = /^\d{4}$/;
                    const validPin = pinRegex.test(tunjiConfirmobj.pinn)
                    if (validPin) {
                        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                        const validPassword = passwordRegex.test(tunjiConfirmobj.pass)
                        if (validPassword) {
                            if (tunjiConfirmobj.pass === tunjiConfirmobj.c_pin) {
                                const mailExist = tunjiConfirm.find(use => use.mail === tunjiConfirmobj.mail)
                                if (mailExist) {
                                    showMailExist.style.display = 'block'
                                    return;
                                } else {
                                    const exisNum = tunjiConfirm.find(us => us.pho === tunjiConfirmobj.pho)
                                    if (exisNum) {
                                        showNumExist.style.display = 'block'
                                        return;
                                    } else {
                                        const exisNin = tunjiConfirm.find(use => use.ni === tunjiConfirmobj.ni)
                                        if (exisNin) {
                                            showNinExist.style.display = 'block'
                                            return;

                                        } else {
                                            const exisBvn = tunjiConfirm.find(use => use.bi === tunjiConfirmobj.bi)
                                            if (exisBvn) {
                                                showBvnExist.style.display = 'block'
                                                return;

                                            } else {
                                                signUp.innerHTML = `
                                            <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                                            <span class="visually-hidden" role="status">Loading...</span>
                                           `
                                                const cuName = JSON.parse(localStorage.getItem('fullName'))
                                                alert(`Dear ${cuName} You've created an account sucessfully`)
                                                tunjiConfirm.push(tunjiConfirmobj)
                                                localStorage.setItem('confirm', JSON.stringify(tunjiConfirm))
                                                const phoneDigits = document.getElementById('phone').value.trim();
                                                const accountNumber = phoneDigits.slice(-10);
                                                localStorage.setItem('yourAcc', JSON.stringify(accountNumber));
                                                setTimeout(() => { window.location.href = '../sign in/signin.html' }, 2000)

                                            }


                                        }

                                    }
                                }
                            } else {
                                showPinConfirmation.style.display = 'block'
                            }
                        } else {
                            showPasswordError.style.display = 'block'
                        }


                    } else {
                        showValidPin.style.display = 'block'
                    }
                } else {
                    showInvalidPhone.style.display = 'block'
                }
            } else {
                showNinValid.style.display = 'block'
            }

        } else {
            showMailError.style.display = 'block'
        }
    }
}