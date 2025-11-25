let loggedInName = JSON.parse(localStorage.getItem('currentLoggedInUser'))
let storedUser = JSON.parse(localStorage.getItem('myConfirm'))
let currentUser = storedUser.find(user => user.accName === loggedInName)
const updatePassword = () => {
    if (currentUser) {
        const currentPassword = document.getElementById('currentPassword')
        const newPassword = document.getElementById('newPassword')
        const confirmPassword = document.getElementById('confirmPassword')
        console.log(currentPassword.value);



        if (currentPassword.value.trim() === "" || newPassword.value.trim() === "" || confirmPassword.value.trim() === "") {
            alert('pls fill all the input fields')

        } else {
            if (currentPassword.value.trim() == currentUser.pass) {
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
                const validPassword = passwordRegex.test(newPassword.value.trim())
                if (validPassword) {
                    if (newPassword.value.trim() === confirmPassword.value.trim()) {
                        currentUser.pass = newPassword.value.trim()
                        currentUser.c_pass = confirmPassword.value.trim()

                        alert('password changed successfuly')
                        localStorage.setItem('myConfirm', JSON.stringify(storedUser))

                        currentPassword.value = "";
                        newPassword.value = "";
                        confirmPassword.value = "";
                    } else {
                        alert('The passwords didnt matched eachother')
                    }
                } else {
                    alert('Invalid Password')
                }

            } else {
                alert('Incorrect Password')
            }
        }
    }

}