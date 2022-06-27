import React from "react";
import { useSelector } from "react-redux";

import List from "./List";

export default function ListContainer() {
  const { tasks } = useSelector((state) => ({ tasks: state.tasks }));

  return <List tasks={tasks} />;
}
