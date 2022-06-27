const initialState = {};

export default function reducer(state = initialState, action) {
  if (action.type === "setTasks") {
    const { tasks } = action.payload;

    return {
      ...state,
      tasks,
    };
  }
}
