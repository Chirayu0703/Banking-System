let balance = 0;

function deposit() {
  let amount = parseFloat(prompt("Enter amount to deposit:"));
  if (isNaN(amount)) {
    alert("Invalid input!");
  } else {
    balance += amount;
    document.getElementById("balance").value = balance;
    alert(amount + " deposited successfully!");
  }
}

function withdraw() {
  let amount = parseFloat(prompt("Enter amount to withdraw:"));
  if (isNaN(amount)) {
    alert("Invalid input!");
  } else if (amount > balance) {
    alert("Insufficient balance!");
  } else {
    balance -= amount;
    document.getElementById("balance").value = balance;
    alert(amount + " withdrawn successfully!");
  }
}