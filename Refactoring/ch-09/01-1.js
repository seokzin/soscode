const scenario = {
  primaryForce: 100,
  secondaryForce: 10,
  mass: 10,
  delay: 40,
};

const getDistance = (acc, time) => 0.5 * acc * time ** 2;

const primary = (delay, primaryForce, mass, time) => {
  const primaryAcceleration = primaryForce / mass; // (a = F / m)
  const primaryTime = Math.min(time, delay);
  return {
    primaryAcceleration,
    primaryResult: getDistance(primaryAcceleration, primaryTime),
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

  return (
    primaryResult +
    primaryAcceleration * delay * secondaryTime +
    getDistance((primaryForce + secondaryForce) / mass, secondaryTime)
  );
};

console.log(distanceTravelled(scenario, 100));
