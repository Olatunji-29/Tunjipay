
const findAccount = JSON.parse(localStorage.getItem('myConfirm'))
const findName = JSON.parse(localStorage.getItem('tunji'))


const transfer = () => {
    const accountNumber = document.getElementById('accountNumber')
    if (bankSelect.value === "" || accountNumber.value.trim() === "" || amount.value.trim() === "") {
        showError.style.display = 'block'
    } else if (accountNumber.value.trim().length !== 10) {
        showAccountError.style.display = 'block'
    } else if (amount.value.trim() < 50) {
        showAmountError.style.display = 'block'
    } else {
        showError.style.display = 'none'
        const transferObj = {
            bankName: bankSelect.value,
            accNum: accountNumber.value,
            accName: accountName.value,
            howMuch: amount.value
        }
        const fullPhone = '0' + accountNumber.value
        const foundAccount = findAccount.find(user => user.pho === fullPhone)
        if (foundAccount && accountNumber.value.trim().length == 10) {
            accountName.innerHTML = `
             <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
            <span class="visually-hidden" role="status">Loading...</span>
            `
            setTimeout(()=> {
                accountName.innerHTML = foundAccount.accName
            }, 2000)
            console.log(foundAccount.accName);


        } else {
            accountName.innerHTML = `
            <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
            <span class="visually-hidden" role="status">Loading...</span>
            `
            setTimeout(()=> {
                accountName.innerHTML = `${accountNumber.value} account is not registered with us`
            }, 2000)

        }


    }

}



