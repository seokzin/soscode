class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._name;
  }

  set name(aString) {
    this._name = aString;
  }

  get country() {
    return this._country;
  }

  set country(aCountryCode) {
    this._country = aCountryCode;
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
