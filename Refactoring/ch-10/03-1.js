const payAmount = (employee) => {
  if (employee.isSeparated) return { amount: 0, reasonCode: "SEP" }; // 퇴사
  if (employee.isRetired) return { amount: 0, reasonCode: "RET" }; // 은퇴
  return { amount: 100, reasonCode: "WRK" }; // 재직
};
