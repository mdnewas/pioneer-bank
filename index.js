
//loginbtn Handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click" , function(){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = 'block';
})

//Deposit btn handler

const depositBtn = document.getElementById("deposit");
depositBtn.addEventListener("click", function(){
    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber = parseFloat (depositAmount);
    const depositNumber = inputNumber("depositAmount");


    updateSpanText("currentDeposit" , depositNumber);

    updateSpanText("currentBalance" , depositNumber);
    
    document.getElementById("depositAmount").value = "" ;
})

//withdraw button handler
const withdrawBtn = document.getElementById("withdraw");
withdrawBtn.addEventListener("click", function(){

    const withdraw = document.getElementById('withdrawBal').innerText;
    const withdrawBal = parseFloat (withdraw);

    const withdrawNumber = inputNumber ("withdrawAmount");
    // const withdrawAm = document.getElementById("withdrawAmount").value;
    // const withdrawNumber = parseFloat (withdrawAm);
    const withdrawTotal = withdrawBal + withdrawNumber ;
    
    document.getElementById("withdrawBal").innerText = withdrawTotal ;
    const getBalance = document.getElementById("currentBalance").innerText;
    const getNumBalance = parseFloat (getBalance);
    const withdrawBalance = getNumBalance - withdrawNumber;
    document.getElementById("currentBalance").innerText = withdrawBalance;

    document.getElementById("withdrawAmount").value = "" ;
})

function inputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat (amount);
    return amountNumber;
}

function updateSpanText (id , depositNumber){

    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total =  depositNumber + currentNumber;
    
    document.getElementById(id).innerText = total ;
}

    