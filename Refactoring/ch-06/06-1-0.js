let defaultOwner = { firstName: "마틴", lastName: "파울러" };

const getDefaultOwner = () => defaultOwner;
const setDefaultOwner = (arg) => {
  defaultOwner = arg;
};

const spaceship = {
  owner: getDefaultOwner(),
};

setDefaultOwner({ firstName: "레베카", lastName: "파슨스" });

console.log(defaultOwner);
