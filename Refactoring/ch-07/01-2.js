import { readJSON } from "../fileController.js";

class CustomerData {
  _data;
  constructor(data) {
    this._data = data;
  }
}
let customerData = new CustomerData(readJSON("ch-07/01-2.json"));

const getCustomerData = () => customerData;
export const getRawDataOfCustomers = () => customerData._data;
const setRawDataOfCustomers = (arg) => {
  customerData = new CustomerData(arg);
};

export const writeData = (customerId, year, month, amount) => {
  getRawDataOfCustomers()[customerId].usages[year][month] = amount;
};

export const compareUsage = (customerId, laterYear, month) => {
  const later = getRawDataOfCustomers()[customerId].usages[laterYear][month];
  const earlier =
    getRawDataOfCustomers()[customerId].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
};

export const getCustomer = () => customerData;
