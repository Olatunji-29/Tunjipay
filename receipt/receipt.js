// let yourData = JSON.parse(localStorage.getItem('info'))
// let yourAmount = JSON.parse(localStorage.getItem('total'))
// let yourCharges = JSON.parse(localStorage.getItem('charges'))

// console.log(yourCharges);



// yourName.textContent = yourData.accName
// yourBank.textContent = yourData.bankName
// yourAmountt.textContent = `₦${yourAmount}.00`

// rName.textContent = yourData.accName
// rAccount.textContent = yourData.accNum
// rBank.textContent = yourData.bankName
// rAmount.textContent = `₦${yourData.howMuch}.00`
// rCharges.textContent = yourCharges
// rTotal.textContent = `₦${yourAmount}.00`



let yourInfo = JSON.parse(localStorage.getItem('pendingTransfer'))
let yourRemain = JSON.parse(localStorage.getItem('remaining'))

let customers = JSON.parse(localStorage.getItem('myConfirm'))
let loggedInName = JSON.parse(localStorage.getItem('currentLoggedInUser'))
const sender = customers.find(user => user.accName === loggedInName)

yourName.textContent = yourInfo.receiverName
yourBank.textContent = yourInfo.bank
yourAmountt.textContent = `₦${yourInfo.amount}.00`

rName.textContent = yourInfo.receiverName
rAccount.textContent = yourInfo.receiverNumber
rBank.textContent = yourInfo.bank
console.log(yourInfo.bank);

rAmount.textContent = `₦${yourInfo.amount}.00`
 rCharges.textContent = yourRemain.charge
 
 rTotal.textContent = `₦${yourInfo.totalAmount}.00`

