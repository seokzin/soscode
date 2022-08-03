const setOffAlarms = () => {
  console.warn("악당을 찾았소");
};

const findMiscreant = (people) => {
  for (const p of people) {
    if (p === "조커") {
      return "조커";
    }
    if (p === "사루만") {
      return "사루만";
    }
  }
  return "";
};

const alertForMiscreant = (people) => {
  if (findMiscreant(people) !== "") setOffAlarms();
  return;
};

const people = [
  "슈퍼맨",
  "배트맨",
  "아이언맨",
  "사루만",
  "블랙위도우",
  "조커",
  "스파이더맨",
];

const found = findMiscreant(people);

alertForMiscreant(people);
