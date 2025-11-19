let yourData = JSON.parse(localStorage.getItem('info'))
let yourAmount = JSON.parse(localStorage.getItem('total'))
let yourCharges = JSON.parse(localStorage.getItem('charges'))

console.log(yourCharges);



yourName.textContent = yourData.accName
yourBank.textContent = yourData.bankName
yourAmountt.textContent = `₦${yourAmount}.00`

rName.textContent = yourData.accName
rAccount.textContent = yourData.accNum
rBank.textContent = yourData.bankName
rAmount.textContent = `₦${yourData.howMuch}.00`
rCharges.textContent = yourCharges
rTotal.textContent = `₦${yourAmount}.00`