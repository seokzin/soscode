const isNotEligibleForDisability = (anEmployee) =>
  anEmployee.seniority < 2 ||
  anEmployee.monthsDisabled > 12 ||
  anEmployee.isPartTime;

const disabilityAmount = (anEmployee) => {
  if (isNotEligibleForDisability(anEmployee)) return 0;
};
