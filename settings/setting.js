const loggedInName = JSON.parse(localStorage.getItem('currentLoggedInUser'))
const storedUser = JSON.parse(localStorage.getItem('myConfirm'))
const currentUser = storedUser.find(user => user.accName === loggedInName)

if (currentUser) {
    customerName.textContent = loggedInName
    eMail.textContent = currentUser.mail
    phone.textContent = currentUser.pho
    inputEdit.value = currentUser.accName

}

const saveChange = () => {
    const confirmEdit = window.confirm(`Are you sure you want to edit your name from ${currentUser.accName} to ${inputEdit.value}? `)
    if (confirmEdit) {
        currentUser.accName = inputEdit.value
        localStorage.setItem('myConfirm', JSON.stringify(storedUser))
        localStorage.setItem('currentLoggedInUser', JSON.stringify(currentUser.accName))
        customerName.textContent = currentUser.accName
        alert('Name Updated Successfully')

    } else {
        inputEdit.value = currentUser.accName;
    }
}