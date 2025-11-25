
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



    
    const showTable = document.getElementById('showTable');
    const loggedInName = JSON.parse(localStorage.getItem('currentLoggedInUser')) || "Guest";
    const currentUser = storedUsers.find(user => user.accName === loggedInName);
    const allTransaction = JSON.parse(localStorage.getItem('transaction')) || [];
    console.log(allTransaction);
    console.log('Logged in name:', loggedInName);
    console.log('Transactions:', allTransaction);
    console.log('hiii');
    

    

    if (allTransaction.length === 0) {
        showTable.innerHTML = `No Recent Transaction History`;
    } else {

        showTable.innerHTML = '';

        const recentTransactions = [...allTransaction].reverse();

        recentTransactions.forEach((transaction) => {
            const senderName = transaction.senderName;
            const recipientName = transaction.recipientName;

            let rowHTML = '';

            if (senderName === loggedInName) {
                rowHTML = `
                    <div class="d-flex align-items-center justify-content-between border-bottom p-2">
                        <button class="text-start" style= "border: none; background-color: transparent">
                            <p class="mb-0 text-white fw-bold text-dark" >${recipientName}</p>
                            <small style="color: #f3f4f7" >${transaction.recipientAcc} •  ${transaction.recipientBank}</small><br>
                            <small style="color: #f3f4f7" >Last Transfer on: ${transaction.date}</small>

                            
                        </button>
                    </div>
                `;
            }

            showTable.innerHTML += rowHTML;
        });
    }



