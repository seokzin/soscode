import React from "react";
import { render, fireEvent } from "@testing-library/react";

import List from "./List";

describe("List", () => {
  const handleClick = jest.fn();

  function renderList(tasks) {
    return render(<List tasks={tasks} onClick={handleClick} />);
  }

  context("with tasks", () => {
    const tasks = [
      { id: 1, title: "통과를 위해 수단과 방법을 가리지 않는다" },
      { id: 2, title: "TDD를 공부한다" },
    ];

    it("render tasks", () => {
      const { container } = renderList(tasks);

      expect(container).toHaveTextContent(
        "통과를 위해 수단과 방법을 가리지 않는다"
      );
      expect(container).toHaveTextContent("TDD를 공부한다");
    });

    it("render '✔' buttons to delete a task", () => {
      const { getAllByText } = renderList(tasks);

      const buttons = getAllByText("✔");
      fireEvent.click(buttons[0]);

      expect(handleClick).toBeCalledWith(1);
    });
  });

  context("without tasks ", () => {
    const tasks = [];

    it("renders no tasks message", () => {
      const { container } = renderList(tasks);

      expect(container).toHaveTextContent("할 일이 없어요!");
    });
  });
});
