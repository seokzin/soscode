const adjustCapital = (anInstrument) => {
  if (anInstrument.capital <= 0) return 0;
  if (anInstrument.interestRate <= 0 || anInstrument.duration <= 0) return 0;
  return (
    (anInstrument.income / anInstrument.duration) *
    anInstrument.adjustmentFactor
  );
};
