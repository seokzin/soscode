import { assert } from "chai";

let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };

const defaultOwner = () => defaultOwnerData;
const setDefaultOwner = (arg) => {
  defaultOwnerData = arg;
};

const owner1 = defaultOwner();
assert.equal("파울러", owner1.lastName, "처음 값 확인");

const owner2 = defaultOwner();
owner2.lastName = "파슨스";
assert.equal("파슨스", owner1.lastName, "owner2를 변경한 후");
