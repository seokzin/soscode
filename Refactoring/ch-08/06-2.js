const createResource = () => ({});
const availableResources = [];
const allocatedResources = [];

const func = () => {
  let result;
  if (availableResources.length === 0) {
    result = createResource();
  } else {
    result = availableResources.pop();
  }
  allocatedResources.push(result);

  return result;
};
