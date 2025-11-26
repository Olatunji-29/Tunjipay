
/*const findAccount = JSON.parse(localStorage.getItem('myConfirm'))
const findName = JSON.parse(localStorage.getItem('tunji'))
let myData = JSON.parse(localStorage.getItem('info')) || []



const transfer = () => {
    const accountNumber = document.getElementById('accountNumber')
    if (bankSelect.value === "" || accountNumber.value.trim() === "" || amount.value.trim() === "") {
        showError.style.display = 'block'
        showAccountError.style.display = 'none'
        showAmountError.style.display = 'none'


    } else if (accountNumber.value.trim().length !== 10) {
        showAccountError.style.display = 'block'
        showError.style.display = 'none'
        showAmountError.style.display = 'none'


    } else if (amount.value.trim() < 50) {
        showAmountError.style.display = 'block'
        showAccountError.style.display = 'none'
        showError.style.display = 'none'
    } else {
        showError.style.display = 'none'
        showAccountError.style.display = 'none'
        showAmountError.style.display = 'none'


        const fullPhone = '0' + accountNumber.value
        const foundAccount = findAccount.find(user => user.pho === fullPhone)
        if (foundAccount) {
            accountName.innerHTML = `
             <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
            <span class="visually-hidden" role="status">Loading...</span>
            `
            setTimeout(() => {
                accountName.innerHTML = foundAccount.accName
                trans.innerHTML = `Proceed if the Account name is correct`


                trans.onclick = () => {
                    const transferObj = {
                        bankName: bankSelect.value,
                        accNum: accountNumber.value,
                        accName: foundAccount.accName, // We use the verified source name
                        howMuch: amount.value,
                        narrate: narration.value
                    }

                    // 1. Save data (only runs when the user clicks)
                    localStorage.setItem('info', JSON.stringify(transferObj))

                    // 2. Start the redirection sequence (only runs on click)
                    trans.innerHTML = `
                     <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                    <span class="visually-hidden" role="status">Loading...</span>
                        `
                    setTimeout(() => {
                        window.location.href = '../confirmation transfer/confirmation.html'
                    }, 2000)
                } // End of trans.onclick

            }, 2000) // End of setTimeout

        } else {
            accountName.innerHTML = `
            <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
            <span class="visually-hidden" role="status">Loading...</span>
            `
            setTimeout(() => {
                accountName.innerHTML = `${accountNumber.value} account is not registered with us`
            }, 2000)

        }


    }

}
  
*/
// const pendingTransfer = JSON.parse(localStorage.getItem('pendingTransfer')) || []

const storedUsers = JSON.parse(localStorage.getItem('myConfirm')) || []
function autoFindReceiver() {
    const accountNumber = document.getElementById('accountNumber')

    if (accountNumber.value.trim().length !== 10) {
        accountName.innerHTML = `Account name will appear here`
    } else {
        const receiver = storedUsers.find(user => user.pho === "0" + accountNumber.value.trim())

        if (receiver) {
            accountName.innerHTML = `
                <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                <span class="visually-hidden" role="status">Loading...</span>
                `
            setTimeout(() => {
                accountName.innerHTML = receiver.accName
            }, 1000)
        } else {

            accountName.innerHTML = `
                <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                <span class="visually-hidden" role="status">Loading...</span>
                `
            setTimeout(() => {
                accountName.innerHTML = `Account is not exist`
            }, 1000)


        }
    }
}



const transfer = () => {
    const accountNumber = document.getElementById('accountNumber')
    const acctNum = accountNumber.value.trim();


    const sendAmount = Number(amount.value.trim()); // convert to number
    const receiver = storedUsers.find(user => user.pho === "0" + acctNum);

    if (bankSelect.value === "" || accountNumber.value.trim() === "" || amount.value.trim() === "") {
        showError.style.display = 'block'
        showAccountError.style.display = 'none'
        showAmountError.style.display = 'none'


    } else if (accountNumber.value.trim().length !== 10) {
        showAccountError.style.display = 'block'
        showError.style.display = 'none'
        showAmountError.style.display = 'none'


    } else if (amount.value.trim() < 50) {
        showAmountError.style.display = 'block'
        showAccountError.style.display = 'none'
        showError.style.display = 'none'
    } else {
        showError.style.display = 'none'
        showAccountError.style.display = 'none'
        showAmountError.style.display = 'none'
        const narration = document.getElementById('narration');
        const transferData = {
            bank: bankSelect.value,
            receiverName: receiver ? receiver.accName : "Unknown",
            receiverNumber: acctNum,
            amount: sendAmount,
            nar: narration ? narration.value.trim() : "Unknown narration"
        };

        localStorage.setItem('pendingTransfer', JSON.stringify(transferData));
        trans.innerHTML = `
                <span class="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                <span class="visually-hidden" role="status">Loading...</span>
                `
        setTimeout(() => {
            window.location.href = '../confirmation transfer/confirmation.html '
        }, 1000)
    }



}



const overallTransaction = JSON.parse(localStorage.getItem('transaction')) || [];
const loggedInName = JSON.parse(localStorage.getItem('currentLoggedInUser')) || "Guest";


const showTable = document.getElementById('showTable');
let userTransactions = overallTransaction.filter(t =>
    t.senderName === loggedInName || t.recipientName === loggedInName
);


if (userTransactions.length === 0) {
    showTable.innerHTML = `
        <p class="text-center text-muted mt-3">No recent transactions.</p>
    `;
}


let recentTransactions = [...userTransactions].reverse().slice(0, 5);

showTable.innerHTML = "";


recentTransactions.forEach(transaction => {

    let toAdd = "";

    if (transaction.senderName === loggedInName) {
        toAdd = `
        <div class="d-flex align-items-center justify-content-between border-bottom py-2">
            <button onclick="recent( '${transaction.recipientBank}', '${transaction.recipientAcc}')" class= "border-0 w-100 text-start" style="background-color: transparent;">
                <p class="mb-0 fw-bold text-white"> ${transaction.recipientName}</p>
                <small class="text-muted">${transaction.recipientAcc} - ${transaction.recipientBank}</small><br>
                <small class="text-muted">Last transfer on ${transaction.date} - ${transaction.time}</small>
            </button>
            
        </div>`;
    }

    showTable.innerHTML += toAdd;
});

const bankName = document.getElementById('bankSelect');
const accNumber = document.getElementById('accountNumber');

const recent = (bank, acc) => {
    bankName.value = bank;
    accNumber.value = acc;
    autoFindReceiver()
}
