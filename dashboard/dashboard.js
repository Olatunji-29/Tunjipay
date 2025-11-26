
/*let userName = JSON.parse(localStorage.getItem('currentLoggedInUser'))
let balanceKey = `bal_${userName}`
// let newBal = JSON.parse(localStorage.getItem('new'))


const realUserName = document.getElementById('realUserName')
const personalName = document.getElementById('personalName')
const firstLetter = document.getElementById('firstLetter')



realUserName.innerHTML = userName;
personalName.innerHTML = userName;

let myFirst = userName.slice(0, 1).toUpperCase()
firstLetter.innerHTML = myFirst


// let balance = 500

 let hisBalance = localStorage.getItem(balanceKey);
 let balance;

 if(!hisBalance){
      let max = 20000
      let min = 10000
      balance = (Math.random() * (max - min) + min).toFixed(2);

      console.log(balance);
     localStorage.setItem(balanceKey, balance)
 }else{
     balance = Number(hisBalance).toFixed(2)
 }

   availableBalance.innerHTML = `₦ ${(Number(newBal ?? balance)).toFixed(2)}`
   totalBalance.innerHTML =  `₦ ${(Number(newBal ?? balance)).toFixed(2)}`

   availableBalance.innerHTML = `₦ ${balance}`
    totalBalance.innerHTML =  `₦ ${balance}` */





// let allTransaction = JSON.parse(localStorage.getItem('transaction'))
const overallTransaction = JSON.parse(localStorage.getItem('transaction')) || [];
const loggedInName = JSON.parse(localStorage.getItem('currentLoggedInUser')) || "Guest";

const storedUsers = JSON.parse(localStorage.getItem('myConfirm')) || [];
const currentUser = storedUsers.find(user => user.accName === loggedInName);

const userBalance = currentUser ? Number(currentUser.balance).toLocaleString() : 0;



realUserName.textContent = loggedInName;
personalName.textContent = loggedInName;
let myFirst = loggedInName.slice(0, 1).toUpperCase()
firstLetter.innerHTML = myFirst


showHide.addEventListener('click', () => {
    if (availableBalance.type == 'password' && totalBalance.type == 'password') {
        availableBalance.type = 'text'
        totalBalance.type = 'text'
        showHide.textContent = 'Hide'
    } else {
        availableBalance.type = 'password'
        totalBalance.type = 'password'
        showHide.textContent = 'Show'
    }

})
availableBalance.value = `₦${userBalance} `
totalBalance.value = `₦ ${userBalance}`


console.log("Current logged in user:", loggedInName);

const logOut = () => {
    localStorage.removeItem('currentLoggedInUser')
    window.location.href = '../sign in/signin.html'
}




/*const showTransaction = document.getElementById('showTransaction');

if (overallTransaction.length === 0 || !showTransaction) {
    if (showTransaction) {
        showTransaction.innerHTML = '<p class="text-center text-muted mt-3">No recent transactions.</p>';
    }

}


const recentTransactions = [...overallTransaction].reverse();


const limitedTransactions = recentTransactions.slice(0, 5);



limitedTransactions.forEach(transaction => {


    const senderName = transaction.senderName;
    const recipientName = transaction.recipientName;

    let toAdd = '';


    if (transaction.senderName == loggedInName) {
        showTransaction.innerHTML = '';

        toAdd = `
        <div class="d-flex align-items-center justify-content-between border-bottom py-2">
            <div>
                <p class="mb-0 fw-bold text-dark">Sent to: ${recipientName}</p>
                <small class="text-muted">${transaction.recipientBank} - ${transaction.time} - ${transaction.date}</small>
            </div>
            <div class="text-danger text-end">
                <p class="mb-0 fw-bold">- ₦${transaction.tAmount}.00</p>
                <small class="text-muted">Transfer Out</small>
            </div>
        </div>`;


    } else if (transaction.recipientName == loggedInName) {
        toAdd = `
        <div class="d-flex align-items-center justify-content-between border-bottom py-2">
            <div>
                <p class="mb-0 fw-bold text-dark">Received from: ${senderName}</p>
                <small class="text-muted"> ${transaction.senderBank} - ${transaction.time} - ${transaction.date}</small>
            </div>
            <div class="text-success text-end">
                <p class="mb-0 fw-bold">+ ₦${transaction.amount}.00</p>
                <small class="text-muted">Transfer In</small>
            </div>
        </div>`;
    }

    showTransaction.innerHTML += toAdd;
});

if (overallTransaction.length > 5) {
    showTransaction.innerHTML += `
        <div class="text-center pt-3">
            <a href="../history/history.html" class="btn btn-sm btn-outline-primary">See All Transactions (${overallTransaction.length}) &rarr;</a>
        </div>
    `;
}*/






const showTransaction = document.getElementById('showTransaction');


let userTransactions = overallTransaction.filter(t =>
    t.senderName === loggedInName || t.recipientName === loggedInName
);


if (userTransactions.length === 0) {
    showTransaction.innerHTML = `
        <p class="text-center text-muted mt-3">No recent transactions.</p>
    `;
}


let recentTransactions = [...userTransactions].reverse().slice(0, 5);

showTransaction.innerHTML = "";


recentTransactions.forEach(transaction => {

    let toAdd = "";

    if (transaction.senderName === loggedInName) {
        toAdd = `
        <div class="d-flex align-items-center justify-content-between border-bottom py-2">
            <div>
                <p class="mb-0 fw-bold text-dark">Sent to: ${transaction.recipientName}</p>
                <small class="text-muted">${transaction.recipientBank} - ${transaction.time} - ${transaction.date}</small>
            </div>
            <div class="text-danger text-end">
                <p class="mb-0 fw-bold">- ₦${transaction.tAmount}.00</p>
                <small class="text-muted">Transfer Out</small>
            </div>
        </div>`;
    } 
    else if (transaction.recipientName === loggedInName) {
        toAdd = `
        <div class="d-flex align-items-center justify-content-between border-bottom py-2">
            <div>
                <p class="mb-0 fw-bold text-dark">Received from: ${transaction.senderName}</p>
                <small class="text-muted">${transaction.senderBank} - ${transaction.time} - ${transaction.date}</small>
            </div>
            <div class="text-success text-end">
                <p class="mb-0 fw-bold">+ ₦${transaction.amount}.00</p>
                <small class="text-muted">Transfer In</small>
            </div>
        </div>`;
    }

    showTransaction.innerHTML += toAdd;
});


showTransaction.innerHTML += `
    <div class="text-center pt-3">
        <a href="../history/history.html" class="btn btn-sm btn-outline-primary">See All Transactions (${userTransactions.length}) &rarr;</a>
    </div>
`;
