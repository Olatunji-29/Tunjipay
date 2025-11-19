let tunjiUsers = []
if (localStorage.tunji) {
    const stored = JSON.parse(localStorage.getItem('tunji'))
    tunjiUsers = stored
} else {
    tunjiUsers = []
}


const signUpButton = () => {
    const fullName = document.getElementById('fullName')
    const eMail = document.getElementById('eMail')
    const nin = document.getElementById('nin')
    const userPassword = document.getElementById('userPassword')
    const userConfirmPassword = document.getElementById('userConfirmPassword')
    const showError = document.getElementById('showError')
    const showMailError = document.getElementById('showMailError')
    const showMailExist = document.getElementById('showMailExist')




    if (fullName.value.trim() === "" || eMail.value.trim() === "" || nin.value.trim() === "" || userPassword.value.trim() === "" || userConfirmPassword.value.trim() === "") {
        showError.style.display = 'block'
        showMailError.style.display = 'none'
        showMailExist.style.display = 'none'

    } else {
        showError.style.display = 'none'
        const tunjiUsersObj = {
            name: fullName.value,
            mail: eMail.value,
            n_number: nin.value,
            pin: userPassword.value,
            c_pin: userConfirmPassword.value
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        const validEmail = emailRegex.test(tunjiUsersObj.mail)
        if (validEmail) {
            const mailExist = tunjiUsers.find(exist => exist.mail === tunjiUsersObj.mail)
            if (mailExist) {
                showMailExist.style.display = 'block'
                showMailError.style.display = 'none'
                showError.style.display = 'none'
            } else {
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                const validPassword = passwordRegex.test(tunjiUsersObj.pin)
                if (validPassword) {
                    if (tunjiUsersObj.pin === tunjiUsersObj.c_pin) {
                        if ((tunjiUsersObj.n_number).length < 11 || (tunjiUsersObj.n_number).length > 11) {
                            showNinValid.style.display = 'block'
                            showNinExist.style.display = 'none'

                        } else {
                            const ninExist = tunjiUsers.find(ninEx => ninEx.n_number === tunjiUsersObj.n_number)
                            if (ninExist) {
                                showNinExist.style.display = 'block'
                                showNinValid.style.display = 'none'
                                showPasswordError.style.display = 'none'
                                showPinConfirmation.style.display = 'none'



                            } else {
                                if ((tunjiUsersObj.name).length > 1) {
                                    // let hisName = tunjiUsersObj.name.split(" ")[0];
                                    let hisName = tunjiUsersObj.name.slice(0, tunjiUsersObj.name.indexOf(' '));
                                    alert(`Congratulations Dear ${hisName} You have created an account successfully`)
                                    showMailExist.style.display = 'none'
                                    tunjiUsers.push(tunjiUsersObj)
                                    localStorage.setItem('tunji', JSON.stringify(tunjiUsers))
                                    localStorage.setItem('userName', JSON.stringify(tunjiUsersObj.name))
                                    localStorage.setItem('gMail', JSON.stringify(tunjiUsersObj.mail))
                                    window.location.href = '../sign in/signin.html'
                                } else {
                                    showInvalidName.style.display = 'block'
                                    showNinValid.style.display = 'none'

                                }
                            }
                        }
                    } else {
                        showPinConfirmation.style.display = 'block'
                    }
                } else {
                    showPasswordError.style.display = 'block'
                }
            }
        } else {
            showMailError.style.display = 'block'
            showMailExist.style.display = 'none'
            showError.style.display = 'none'

        }



        fullName.value = ''
        eMail.value = ''
        nin.value = ''
        userPassword.value = ''
        userConfirmPassword.value = ''

    }
}