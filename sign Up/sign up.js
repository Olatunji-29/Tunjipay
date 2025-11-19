let tunjiUsers = []
if (localStorage.tunji) {
    const stored = JSON.parse(localStorage.getItem('tunji'))
    tunjiUsers = stored
} else {
    tunjiUsers = []
}


const signUpButton = () => {
    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')
    const userPassword = document.getElementById('userPassword')
    const userConfirmPassword = document.getElementById('userConfirmPassword')
    const showError = document.getElementById('showError')





    if (firstName.value.trim() === "" || lastName.value.trim() === "" || dob.value.trim() === "" || gender.value.trim() === "" || country.value.trim() === "") {
        showError.style.display = 'block'


    } else {
        showError.style.display = 'none'
        const tunjiUsersObj = {
            f_name: firstName.value,
            l_name: lastName.value,
            ofBrith: dob.value,
            gen: gender.value,
            count: country.value,

        }


        const yearOfBirth = new Date(tunjiUsersObj.ofBrith).getFullYear();
        const currentYear = new Date().getFullYear();
        if (currentYear - yearOfBirth >= 18) {
            if ((tunjiUsersObj.f_name).length > 1 && (tunjiUsersObj.l_name).length > 1) {
                alert('Level 1 Completed')
                signUp.innerHTML = `
                <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                <span class="visually-hidden" role="status">Loading...</span>
                `
                tunjiUsers.push(tunjiUsersObj)
                // localStorage.setItem('tunji', JSON.stringify(tunjiUsers))
                localStorage.setItem('currentLoggedInUser', JSON.stringify(`${tunjiUsersObj.f_name} ${tunjiUsersObj.l_name}`));
                localStorage.setItem('completeStep1', 'true')
                setTimeout(()=> {
                    window.location.href = '../step2/step2.html'
                }, 2000)
            } else {
                showNameError.style.display = 'block'
            }
        } else {
            showBirthError.style.display = 'block'
        }



    }


}
