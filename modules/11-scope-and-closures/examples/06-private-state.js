// Closures give you PRIVATE data: variables that only certain functions can touch.

function createBankAccount(ownerName) {
  let balance = 0;                // nobody outside can read or change this directly

  function deposit(amount) {
    if (amount <= 0) return "Deposit must be positive";
    balance += amount;
    return balance;
  }

  function withdraw(amount) {
    if (amount > balance) return "Insufficient funds";
    balance -= amount;
    return balance;
  }

  function getBalance() {
    return `${ownerName}: $${balance}`;
  }

  return { deposit, withdraw, getBalance }; // expose ONLY these functions
}

const account = createBankAccount("Ana");
account.deposit(100);
console.log(account.withdraw(30));
console.log(account.withdraw(500));
console.log(account.getBalance());

console.log(account.balance);  // undefined — the variable is truly private
account.balance = 1_000_000;   // creates an unrelated property; the real balance is safe
console.log(account.getBalance());
