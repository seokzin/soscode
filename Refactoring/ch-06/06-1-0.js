let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };

const defaultOwner = () => defaultOwnerData;
const setDefaultOwner = (arg) => {
  defaultOwnerData = arg;
};

const spaceship = {
  owner: defaultOwner(),
};

setDefaultOwner({ firstName: "레베카", lastName: "파슨스" });

console.log(defaultOwnerData);
