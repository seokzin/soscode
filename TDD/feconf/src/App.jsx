import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setTasks } from "./actions";
import tasks from "../fixtures/tasks";
import ListContainer from "./ListContainer";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTasks(tasks));
  }, []);

  return (
    <div>
      <h1>To-do</h1>
      <ListContainer />
    </div>
  );
}
