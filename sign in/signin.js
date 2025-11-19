

const signInButton = () => {
    const eMail = document.getElementById('eMail').value.trim()
    const password = document.getElementById('password').value.trim()

    if (eMail === "" || password === "") {
        showError.style.display = 'block'
    } else {
        showError.style.display = 'none'
        const signInDetails = {
            mail: eMail,
            pass: password,
            loginTime: new Date().toLocaleTimeString()
        }
        const storedUsers = JSON.parse(localStorage.getItem('myConfirm')) || [];
        const found = storedUsers.find(user => user.mail === signInDetails.mail)

        if (found) {
            const foundUser = storedUsers.find(user => user.mail === signInDetails.mail && user.pass === signInDetails.pass)
            if (foundUser) {
                localStorage.setItem('currentLoggedInUser', JSON.stringify(foundUser.accName));
                alert('Logged In Suceesfully')
                signIn.innerHTML = `
                 <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                 <span class="visually-hidden" role="status">Loading...</span>
                `
                setTimeout(() => {
                    window.location.href = '../dashboard/dashboard.html'
                }, 3000)


            } else {
                showInvalidCredential.style.display = 'block'
            }

        } else {
            showExist.style.display = 'block'
        }

    }
}