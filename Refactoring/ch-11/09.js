class Score {
  #candidate;
  #medicalExam;
  #scoringGuide;
  constructor(candidate, medicalExam, scoringGuide) {
    this.#candidate = candidate;
    this.#medicalExam = medicalExam;
    this.#scoringGuide = scoringGuide;
  }

  exec() {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;
    if (this.#medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }
    let certificationGrade = "regular";
    if (this.#scoringGuide.stateWithLowCertification(this.#candidate.originState)) {
      certificationGrade = "low";
      result -= 5;
    }
    result -= Math.max(healthLevel - 5, 0);
    return { result, certificationGrade, highMedicalRiskFlag };
  }
}

const score = (candidate, medicalExam, scoringGuide) => {
  return new Score(candidate, medicalExam, scoringGuide).exec();
};

const scoringGuide = { stateWithLowCertification: (state) => state === "CA" || state === "ME" };

console.log(score({ originState: "CA" }, { isSmoker: true }, scoringGuide));
console.log(score({ originState: "NY" }, { isSmoker: false }, scoringGuide));
