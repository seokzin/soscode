import React from "react";

import List from "./List";

export default function App() {
  const tasks = [
    { id: 1, title: "통과를 위해 수단과 방법을 가리지 않는다" },
    { id: 1, title: "TDD를 공부한다" },
  ];

  return (
    <div>
      <h1>To-do</h1>
      <List tasks={tasks} />
    </div>
  );
}
