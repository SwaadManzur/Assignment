class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance is $${this.balance}.`);
        } else {
            console.log("Please enter a positive amount to deposit.");
        }
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. Remaining balance is $${this.balance}.`);
        } else {
            console.log("Insufficient funds.");
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Example of usage:
let account1 = new BankAccount(123456, 'John Doe', 1000);
account1.displayAccountInfo(); // Display initial account info
account1.deposit(500);          // Deposit money
account1.withdraw(200);         // Withdraw money
account1.withdraw(1500);        // Attempt to withdraw more than the balance
console.log(`Current Balance: $${account1.getBalance()}`); // Show current balance
