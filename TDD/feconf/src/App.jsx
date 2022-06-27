import React from "react";

import List from "./List";

import tasks from "../fixtures/tasks";

export default function App() {
  return (
    <div>
      <h1>To-do</h1>
      <List tasks={tasks} />
    </div>
  );
}
