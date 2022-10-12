import { readJSON } from "../fileController.js";
import { statement, htmlStatement } from "./statement.js";

const invoices = readJSON("ch-01/invoices.json");
const plays = readJSON("ch-01/plays.json");

invoices.forEach((invoice) => {
  console.log(statement(invoice, plays));
});
