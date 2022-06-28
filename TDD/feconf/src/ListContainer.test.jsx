import React from "react";
import { render, fireEvent } from "@testing-library/react";

import ListContainer from "./ListContainer";

import tasks from "../fixtures/tasks";
import { useSelector, useDispatch } from "../__mocks__/react-redux";

jest.mock("react-redux");

describe("ListContainer", () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) =>
    selector({
      tasks,
    })
  );

  it("render tasks", () => {
    const { container, getAllByText } = render(<ListContainer />);

    const buttons = getAllByText("✔");
    fireEvent.click(buttons[0]);

    expect(dispatch).toBeCalled();
  });
});
