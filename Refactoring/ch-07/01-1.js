let result = "";
const organization = { name: "애크미 구스베리", country: "GB" };

const getRawDataOfOrganization = () => {
  return organization;
};

getRawDataOfOrganization().name = "애그머니 블루베리";
result += `<h1>${getRawDataOfOrganization().name}</h1>`;

console.log(result);
