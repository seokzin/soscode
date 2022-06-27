import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

import tasks from "../fixtures/tasks";
import { useSelector, useDispatch } from "../__mocks__/react-redux";

jest.mock("react-redux");

describe("App", () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

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
