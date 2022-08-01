const scenario = {
  primaryForce: 100,
  secondaryForce: 10,
  mass: 10,
  delay: 40,
};

const distanceTravelled = (scenario, time) => {
  let result;
  const primaryAcceleration = scenario.primaryForce / scenario.mass; // (a = F / m)
  const primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * primaryAcceleration * primaryTime ** 2;

  const secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    const primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcceleration * secondaryTime ** 2;
  }

  return result;
};

console.log(distanceTravelled(scenario, 100));
