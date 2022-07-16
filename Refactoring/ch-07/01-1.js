class Organization {
  constructor(data) {
    this._data = data;
  }

  get name() {
    return this._data.name;
  }

  set name(aString) {
    this._data.name = aString;
  }
}

let result = "";
const organization = new Organization({
  name: "애크미 구스베리",
  country: "GB",
});

const getOrganization = () => organization;

getOrganization().name = "애그머니 블루베리";
result += `<h1>${getOrganization().name}</h1>`;

console.log(result);
