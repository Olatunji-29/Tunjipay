const customersName = document.getElementById('customersName');
const customersMail = document.getElementById('show')
const showAcc = document.getElementById('showAcc')


const loggedInName = JSON.parse(localStorage.getItem('currentLoggedInUser')) || "Guest";
const storedUsers = JSON.parse(localStorage.getItem('myConfirm')) || [];

const currentUser = storedUsers.find(user => user.accName === loggedInName)


let firstLetter = loggedInName.slice(0, 1)
let hisSecondLetter = loggedInName[loggedInName.indexOf(" ") + 1]
let firstSecond = firstLetter + hisSecondLetter
console.log(firstSecond);




customersName.innerHTML = loggedInName;
customersMail.innerHTML = currentUser? currentUser.mail:"No Email"
firstTwoLetter.innerHTML = firstSecond
let accountNumber = currentUser.pho.slice(-10)
showAcc.innerHTML = accountNumber
showBvn.innerHTML = currentUser? currentUser.bi : 'No bvn'




