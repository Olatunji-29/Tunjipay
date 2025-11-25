function loadHistory() {
    const loggedInName = JSON.parse(localStorage.getItem('currentLoggedInUser')) || "Guest";
    const storedUsers = JSON.parse(localStorage.getItem('myConfirm')) || [];
    const currentUser = storedUsers.find(user => user.accName === loggedInName);
    const allTransaction = JSON.parse(localStorage.getItem('transaction')) || [];

    if (!currentUser) return;

    
const filterType = document.getElementById('filterType')



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
                        <div>
                            <p class="mb-0 text-white fw-bold text-dark" >Sent to: ${recipientName}</p>
                            <small style="color: #f3f4f7" >${transaction.recipientBank} • ${transaction.time} • ${transaction.date}</small>
                        </div>
                        <div class="text-danger text-end">
                            <p class="mb-0 fw-bold">- ₦${transaction.tAmount}.00</p>
                            <small class="text-muted">Transfer Out</small>
                        </div>
                    </div>
                `;
            }

            else if (recipientName === loggedInName) {
                rowHTML = `
                    <div class="d-flex align-items-center justify-content-between border-bottom py-2">
                        <div>
                            <p class="mb-0 fw-bold text-dark">Received from: ${senderName}</p>
                            <small class="text-muted">${transaction.senderBank} • ${transaction.time} • ${transaction.date}</small>
                        </div>
                        <div class="text-success text-end">
                            <p class="mb-0 fw-bold">+ ₦${transaction.amount}.00</p>
                            <small class="text-muted">Transfer In</small>
                        </div>
                    </div>
                `;
            }

            showTable.innerHTML += rowHTML;
        });
    }
}

loadHistory();
