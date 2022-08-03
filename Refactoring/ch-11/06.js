class HeatingPlan {
  #max;
  #min;

  targetTemperature(selectedTemperature) {
    if (selectedTemperature > this.#max) return this.#max;
    else if (selectedTemperature < this.#min) return this.#min;
    else return selectedTemperature;
  }

  compare(stat) {
    if (this.targetTemperature(stat.selectedTemperature) > stat.currentTemperature) return 1;
    if (this.targetTemperature(stat.selectedTemperature) < stat.currentTemperature) return -1;
    return 0;
  }
}

const temperatureController = () => {
  const setToHeat = () => {};
  const setToCool = () => {};
  const setOff = () => {};

  const thermostat = {
    selectedTemperature: 25,
    currentTemperature: 27,
  };

  const heatingPlan = new HeatingPlan();
  const heat = heatingPlan.compare(thermostat);
  if (heat > 0) setToHeat();
  else if (heat < 0) setToCool();
  else setOff();
};
