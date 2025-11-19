

// amount.textContent = `₦${yourData.howMuch}.00`

// if (yourData.howMuch <= 5000) {
//     charge = 5
// } else if (yourData.howMuch > 5000 && yourData.howMuch < 10000) {
//     charge = 10
// } else {
//     charge = 15
// }
// charges.textContent = `₦${charge}`
// localStorage.setItem('charges', JSON.stringify(charges.textContent))

// let tAmount = Number(yourData.howMuch) + Number(charge)
// totalAmount.textContent = `₦${tAmount}.00`
// localStorage.setItem('total', JSON.stringify(tAmount))


// if (yourData.narrate == "") {
//     narration.textContent = "No Caption"
// } else {
//     narration.textContent = yourData.narrate
// }

// rName.textContent = yourData.accName

// rAccountNumber.textContent = yourData.accNum

// rBank.textContent = yourData.bankName

// console.log(yourData);


// const toComplete = () => {
//     if (transactionPin.value === "") {
//         showError.style.display = 'block'
//     } else {
//         showError.style.display = 'none'
//         const matchPin = toKnowPin.find(user => user.pinn == transactionPin.value)
//         if (matchPin) {
//             let userName = JSON.parse(localStorage.getItem('currentLoggedInUser'))
//             let balanceKey = `bal_${userName}`;
//             let currentBalance = Number(localStorage.getItem(balanceKey)) || 0
//             if (currentBalance < yourData.howMuch) {
//                 showError2.style.display = 'block'
//             }else{
//                 let newBalance = Number(currentBalance) - Number(yourData.howMuch)
//                 localStorage.setItem(balanceKey, newBalance)
//                 window.location.href = '../receipt/receipt.html'

//             }

//         } else {
//             alert('noo')
//         }

//     }
// }








let yourInfo = JSON.parse(localStorage.getItem('pendingTransfer'))
let customers = JSON.parse(localStorage.getItem('myConfirm'))

let loggedInName = JSON.parse(localStorage.getItem('currentLoggedInUser'))
const sender = customers.find(user => user.accName === loggedInName)

if (sender) {
    amount.textContent = `₦${yourInfo.amount}.00`

    if (yourInfo.amount <= 5000) {
        charge = 5
    } else if (yourInfo.amount > 5000 && yourInfo.amount < 10000) {
        charge = 10
    } else {
        charge = 15
    }
    charges.textContent = `₦${charge}`

    let tAmount = Number(yourInfo.amount) + Number(charge)
    totalAmount.textContent = `₦${tAmount}.00`

    narration.textContent = yourInfo.nar

    rName.textContent = yourInfo.receiverName

    rAccountNumber.textContent = yourInfo.receiverNumber

    rBank.textContent = yourInfo.bank
}



const toComplete = () => {
    if (transactionPin.value === "") {
        showError.style.display = 'block'
    } else {
        showError.style.display = 'none'
        const matchPin = customers.find(user => user.accName === loggedInName && user.pinn === transactionPin.value)
        if (!matchPin) {
            alert('noo')
        } else {
            const sender = customers.find(user => user.accName === loggedInName);
            const receiver = customers.find(user => user.accName === yourInfo.receiverName);

            let currentBalance = Number(sender.balance) || 0;

            let charge;
            if (yourInfo.amount <= 5000) {
                charge = 5;
            } else if (yourInfo.amount > 5000 && yourInfo.amount < 10000) {
                charge = 10;
            } else {
                charge = 15;
            }


            let totalDeduction = Number(yourInfo.amount) + charge;

            if (currentBalance < totalDeduction) {
                showError2.style.display = 'block'; // insufficient funds
            } else {
                sender.balance = currentBalance - totalDeduction;

                if (receiver) {
                    receiver.balance = (Number(receiver.balance) || 0) + Number(yourInfo.amount);
                }

                localStorage.setItem('myConfirm', JSON.stringify(customers));

                // Redirect to receipt
                window.location.href = '../receipt/receipt.html';
            }

        }

    }
}