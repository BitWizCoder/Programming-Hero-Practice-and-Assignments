// Boxes
let deposit = document.getElementById("deposit");
let withdraw = document.getElementById("withdraw");
let balance = document.getElementById("balance");

// Inputs
const depositInput = document.getElementById("deposit-input");
const withdrawInput = document.getElementById("withdraw-input");

// input btns
const depositBtn = document.getElementById("deposit-btn");
const withdrawBtn = document.getElementById("withdraw-btn");

// Deposit
let depositMoney = 20;
deposit.textContent = depositMoney;

// Balance
let balanceMoney = 500;
balance.textContent = balanceMoney;

depositBtn.addEventListener("click", () => {
  // Calculation
  //   add to deposit
  let depositInputToNum = parseInt(depositInput.value);
  depositMoney += depositInputToNum;
  deposit.textContent = depositMoney;

  // add to balance
  balanceMoney += depositInputToNum;
  balance.textContent = balanceMoney;

  depositInput.value = "";
});

// Withdraw
let withdrawMoney = 0;
withdraw.textContent = withdrawMoney;

withdrawBtn.addEventListener("click", () => {
  let withdrawInputToNum = parseInt(withdrawInput.value);
  withdrawMoney += withdrawInputToNum;
  withdraw.textContent = withdrawMoney;

  //   Balance
  balanceMoney -= withdrawInputToNum;
  balance.textContent = balanceMoney;
});
