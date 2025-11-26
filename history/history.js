function loadHistory() {
    const loggedInName = JSON.parse(localStorage.getItem('currentLoggedInUser')) || "Guest";
    const storedUsers = JSON.parse(localStorage.getItem('myConfirm')) || [];
    const currentUser = storedUsers.find(user => user.accName === loggedInName);
const overallTransaction = JSON.parse(localStorage.getItem('transaction')) || [];


    if (!currentUser) return;

    
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
            <div>
                <p class="mb-0 fw-bold text-white">Sent to: ${transaction.recipientName}</p>
                <small class="text-warning">${transaction.recipientBank} - ${transaction.time} - ${transaction.date}</small>
            </div>
            <div class="text-danger text-end">
                <p class="mb-0 fw-bold">- ₦${transaction.tAmount}.00</p>
                <small class="text-white">Transfer Out</small>
            </div>
        </div>`;
    } 
    else if (transaction.recipientName === loggedInName) {
        toAdd = `
        <div class="d-flex align-items-center justify-content-between border-bottom py-2">
            <div>
                <p class="mb-0 fw-bold text-white">Received from: ${transaction.senderName}</p>
                <small class="text-warning">${transaction.senderBank} - ${transaction.time} - ${transaction.date}</small>
            </div>
            <div class="text-success text-end">
                <p class="mb-0 fw-bold">+ ₦${transaction.amount}.00</p>
                <small class="text-white">Transfer In</small>
            </div>
        </div>`;
    }

    showTable.innerHTML += toAdd;
});




}

loadHistory();
