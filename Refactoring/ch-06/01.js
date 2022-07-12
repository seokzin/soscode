const printBanner = () => {
  console.log("*******************");
  console.log("***** 고객채무 *****");
  console.log("*******************");
};

const printOwing = (invoice) => {
  const printDetails = () => {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate?.toLocaleString()}`);
  };

  let outstanding = 0;

  printBanner();

  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  const today = new Date();

  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  printDetails();
};

printOwing({
  customer: "석진",
  orders: [
    { name: "사채", amount: 100 },
    { name: "대출", amount: 1000 },
  ],
});
