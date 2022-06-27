export function setTasks(tasks) {
  return {
    type: "setTasks",
    payload: {
      tasks,
    },
  };
}

export default {};
