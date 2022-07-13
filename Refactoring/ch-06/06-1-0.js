let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };

const getDefaultOwner = () => defaultOwnerData;
const setDefaultOwner = (arg) => {
  defaultOwnerData = arg;
};

const spaceship = {
  owner: getDefaultOwner(),
};

setDefaultOwner({ firstName: "레베카", lastName: "파슨스" });

console.log(defaultOwnerData);
