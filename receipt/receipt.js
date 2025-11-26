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


let overallTransaction = JSON.parse(localStorage.getItem('transaction')) || []

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
 rCharges.textContent = `₦${yourRemain.charge}.00`
 
 rTotal.textContent = `₦${yourRemain.totalAmount}.00`

const sTransactionOBJ = {
    amount: yourInfo.amount,
    tCharges: yourRemain.charge,
    tAmount: yourRemain.totalAmount,
    senderName: sender.accName,       // NEW
    senderBank: sender.bank,
    senderAcc: sender.accNum,
    recipientName: yourInfo.receiverName, // NEW
    recipientBank: yourInfo.bank,
    recipientAcc: yourInfo.receiverNumber,
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString(),
    transId: Math.floor(Math.random() * (100000000000000 - 100000000 + 1)) + 100000000,
    payType: 'Money Transfer'

};

dateReceipt.innerHTML = sTransactionOBJ.date
timeReceipt.innerHTML = sTransactionOBJ.time

overallTransaction.push(sTransactionOBJ)
localStorage.setItem('transaction', JSON.stringify(overallTransaction))
overallTransaction.forEach(transaction => {
    console.log(transaction.tAmount);
});
