import React from "react";
import { useSelector } from "react-redux";
import { render } from "@testing-library/react";

import App from "./App";

import tasks from "../fixtures/tasks";

jest.mock("react-redux");

describe("App", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      tasks,
    })
  );

  it("render tasks", () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent(
      "통과를 위해 수단과 방법을 가리지 않는다"
    );
  });
});
