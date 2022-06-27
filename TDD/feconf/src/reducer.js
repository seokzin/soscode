const initialState = {};

export default function reducer(state = initialState, action) {
  if (action.type === "setTasks") {
    return {
      ...state,
      tasks: action.payload.tasks,
    };
  }
}
