/**
 * Extract a value from a nested object
 * @param keys - The keys to extract
 * @param obj - The object to extract from
 */

const deepPick = (keys: string, obj: Record<string, unknown>) => {
  const [first, ...rest] = keys.split('.');

  return rest.length
    ? deepPick(rest.join('.'), obj[first] as Record<string, unknown>)
    : obj[first];
};

export default deepPick;
