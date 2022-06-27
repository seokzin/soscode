import React from "react";

import { render } from "@testing-library/react";

import List from "./List";

describe("List", () => {
  it("render tasks", () => {
    const tasks = [
      { id: 1, title: "통과를 위해 수단과 방법을 가리지 않는다" },
      { id: 1, title: "TDD를 공부한다" },
    ];

    const { container } = render(<List tasks={tasks} />);

    expect(container).toHaveTextContent(
      "통과를 위해 수단과 방법을 가리지 않는다"
    );
    expect(container).toHaveTextContent("TDD를 공부한다");
  });
});
