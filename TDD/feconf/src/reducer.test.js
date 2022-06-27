import reducer from "./reducer";

import { setTasks } from "./actions";
import tasks from "../fixtures/tasks";

describe("reducer", () => {
  describe("setTasks", () => {
    it("changes tasks array", () => {
      const state = reducer(
        {
          tasks: [],
        },
        setTasks(tasks)
      );

      expect(state.tasks).not.toHaveLength(0);
    });
  });
});
