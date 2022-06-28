const initialState = {};

export default function reducer(state = initialState, action) {
  if (action.type === "setTasks") {
    const { tasks } = action.payload;

    return {
      ...state,
      tasks,
    };
  }

  if (action.type === "deleteTask") {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload.id),
    };
  }
}
