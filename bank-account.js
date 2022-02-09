/**
 * Simulate a bank account supporting opening/closing, withdrawals, and deposits of money. Watch out for concurrent transactions!
 * A bank account can be accessed in multiple ways. Clients can make deposits and withdrawals using the internet, mobile phones, etc. Shops can charge against the account.
 * Create an account that can be accessed from multiple threads/processes (terminology depends on your programming language).
 * It should be possible to close an account; operations against a closed account must fail.
 */

export class BankAccount {
  constructor() {
    this.money = 0;
    this.account = false;
  }

  open() {
    if (!this.account) {
      this.account = true;
    } else {
      throw new ValueError("Error");
    }
  }

  close() {
    if (this.account) {
      this.account = false;
      this.money = 0;
    } else {
      throw new ValueError("Error");
    }
  }

  deposit(deposit_money) {
    if (deposit_money >= 0 && this.account) {
      this.money += deposit_money;
    } else {
      throw new ValueError("Error");
    }
  }

  withdraw(withdraw_money) {
    if (withdraw_money >= 0 && this.account) {
      if (this.money - withdraw_money >= 0) {
        this.money -= withdraw_money;
      } else {
        throw new ValueError("Error");
      }
    } else {
      throw new ValueError("Error");
    }
  }

  get balance() {
    if (this.account) {
      return this.money;
    } else {
      throw new ValueError("Error");
    }
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
