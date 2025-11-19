
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






const loggedInName = JSON.parse(localStorage.getItem('currentLoggedInUser')) || "Guest";

const storedUsers = JSON.parse(localStorage.getItem('myConfirm')) || [];
const currentUser = storedUsers.find(user => user.accName === loggedInName);

const userBalance = currentUser ? currentUser.balance : 0;


realUserName.textContent = loggedInName;
personalName.textContent = loggedInName;
let myFirst = loggedInName.slice(0, 1).toUpperCase()
firstLetter.innerHTML = myFirst
availableBalance.innerHTML = `₦${userBalance} `
totalBalance.innerHTML = `₦ ${userBalance}`


console.log("Current logged in user:", loggedInName);
