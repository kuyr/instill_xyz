class LoginPage {
  get customerLoginBtn() {
    return $("button[ng-click='customer()']");
  }
  get usernameDropdown() {
    return $("//select[@id='userSelect']");
  }
  get loginBtn() {
    return $("button[type='submit']");
  }
  get transactionsBtn() {
    return $("//button[@ng-click='transactions()']");
  }
  get logoutBtn() {
    return $("//button[@ng-click='byebye()']");
  }
  get tableContent() {
    return $("//td[@class='ng-binding']");
  }
  get transRows() {
    return $$("//table[@class='table table-bordered table-striped']/tbody/tr");
  }

  /**
   * Retrieves the rows of the transactions table and maps them to an array of transaction objects.
   * @return {Promise<array>} The array of transaction objects.
   */
  async getTransRows() {
    // Retrieve the rows of the transactions table
    let rows = await this.transRows;
    // Initialize an empty array to hold the transactions
    let transactions = [];
    // Iterate over each row in the table
    for (let row of rows) {
      // Retrieve the cells in the current row
      let cells = await row.$$("td");
      // Retrieve the text content of each cell
      let date = await cells[0].getText();
      let amount = await cells[1].getText();
      let type = await cells[2].getText();
      // Create a transaction object and add it to the array
      transactions.push({ date, amount, type });
    }
    // Return the array of transaction objects
    return transactions;
  }

  /**
   * Retrieves the number of rows in the transactions table.
   *
   * @return {Promise<number>} The number of rows in the transactions table.
   */
  async getRowCount() {
    // Retrieve the rows of the transactions table
    let rows = await this.transRows;
    // Return the length of the rows array, which represents the number of rows in the table
    return rows.length;
  }

  /**
   * Checks if a transaction with the given amount and date exists in the transactions table.
   *
   * @param {string} amount - The amount of the transaction to search for.
   * @param {string} date - The date of the transaction to search for.
   * @return {Promise<boolean>} - True if a transaction with the given amount and date is found, false otherwise.
   */
  async isTransactionExist(amount, date) {
    // Fetch the transactions from the table
    const transactions = await this.getTransRows();
    // Iterate over each transaction
    for (let transaction of transactions) {
      // Check if the current transaction matches the given amount and date
      if (transaction.amount === amount && transaction.date === date) {
        // If a match is found, return true
        return true;
      }
    }
    // If no match is found, return false
    return false;
  }

  async open() {
    return browser.url(
      "https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"
    );
  }
  async close() {
    return browser.closeWindow();
  }

  async getCurrentUrl() {
    return browser.getUrl();
  }
}

module.exports = new LoginPage();
