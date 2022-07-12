const printBanner = () => {
  console.log("*******************");
  console.log("***** 고객채무 *****");
  console.log("*******************");
};

const printDetails = (invoice, outstanding) => {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate?.toLocaleString()}`);
};

const recordDueData = (invoice) => {
  const today = new Date();

  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
};

const printOwing = (invoice) => {
  let outstanding = 0;

  printBanner();

  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  recordDueData(invoice);

  printDetails(invoice, outstanding);
};

printOwing({
  customer: "석진",
  orders: [
    { name: "사채", amount: 100 },
    { name: "대출", amount: 1000 },
  ],
});
