const TransactionPage = require("../pageobjects/xyzbank.page");

describe("Transaction validation", () => {
  const valid_username = "Hermoine Granger";
  const amount = "30";
  const day = "Jan 2, 2015 12:00:00 AM";
  const invalid_amount = "50";
  const invalid_day = "Jan 7, 2029 12:00:00 AM";

  beforeEach(async () => {
    await TransactionPage.open();
    await TransactionPage.customerLoginBtn.click();
    await TransactionPage.usernameDropdown.selectByVisibleText(valid_username);
    await TransactionPage.loginBtn.click();
  });
  afterEach(async () => {
    await TransactionPage.logoutBtn.click();
  });

  it("should login and validate transaction for a given amount on a given day", async () => {
    await TransactionPage.transactionsBtn.click();
    const transactionExist = await TransactionPage.isTransactionExist(amount, day);
    expect(transactionExist).toBe(true);
  });

  it("should login and validate transaction for a given amount does not exist on a given day", async () => {
    await TransactionPage.transactionsBtn.click();
    const transactionExist = await TransactionPage.isTransactionExist(
      invalid_amount,
      invalid_day
    );
    expect(transactionExist).toBe(false);
  });
});
