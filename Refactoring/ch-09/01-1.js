const scenario = {
  primaryForce: 100,
  secondaryForce: 10,
  mass: 10,
  delay: 40,
};

const primary = (delay, primaryForce, mass, time) => {
  const primaryAcceleration = primaryForce / mass; // (a = F / m)
  const primaryTime = Math.min(time, delay);
  return {
    primaryAcceleration,
    primaryResult: 0.5 * primaryAcceleration * primaryTime ** 2,
  };
};

const distanceTravelled = (
  { delay, primaryForce, secondaryForce, mass },
  time
) => {
  const { primaryAcceleration, primaryResult } = primary(
    delay,
    primaryForce,
    mass,
    time
  );
  const secondaryTime = time - delay;
  if (secondaryTime <= 0) return primaryResult;

  const primaryVelocity = primaryAcceleration * delay;
  const secondaryAcceleration = (primaryForce + secondaryForce) / mass;
  return (
    primaryResult +
    primaryVelocity * secondaryTime +
    0.5 * secondaryAcceleration * secondaryTime ** 2
  );
};

console.log(distanceTravelled(scenario, 100));
