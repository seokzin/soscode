import React from "react";
import { render } from "@testing-library/react";

import ListContainer from "./ListContainer";

import tasks from "../fixtures/tasks";
import { useSelector } from "../__mocks__/react-redux";

jest.mock("react-redux");

describe("ListContainer", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      tasks,
    })
  );

  it("render tasks", () => {
    const { container } = render(<ListContainer />);

    expect(container).toHaveTextContent(
      "통과를 위해 수단과 방법을 가리지 않는다"
    );
  });
});
