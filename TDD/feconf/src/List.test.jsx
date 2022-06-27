import React from "react";
import { render } from "@testing-library/react";

import List from "./List";

import tasks from "../fixtures/tasks";

describe("List", () => {
  it("render tasks", () => {
    const { container } = render(<List tasks={tasks} />);

    expect(container).toHaveTextContent(
      "통과를 위해 수단과 방법을 가리지 않는다"
    );
    expect(container).toHaveTextContent("TDD를 공부한다");
  });
});
