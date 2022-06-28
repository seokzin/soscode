export function setTasks(tasks) {
  return {
    type: "setTasks",
    payload: {
      tasks,
    },
  };
}

export function deleteTask(id) {
  return {
    type: "deleteTask",
    payload: {
      id,
    },
  };
}
