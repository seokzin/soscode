const PEOPLE = [
  { age: 30, salary: 4000 },
  { age: 40, salary: 7000 },
  { age: 24, salary: 2800 },
  { age: 37, salary: 4600 },
  { age: 27, salary: 3200 },
];

const youngestAge = (people) => {
  let result = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if (p.age < result) result = p.age;
  }
  return result;
};

const totalSalary = (people) => {
  let result = 0;
  for (const p of people) {
    result += p.salary;
  }
  return result;
};

const getInfos = (people) =>
  `최연소: ${youngestAge(people)}, 총급여: ${totalSalary(people)}`;

console.log(getInfos(PEOPLE));
