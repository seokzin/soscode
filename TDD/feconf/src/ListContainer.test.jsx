import React from "react";
import { useSelector } from "react-redux";
import { render } from "@testing-library/react";

import ListContainer from "./ListContainer";

jest.mock("react-redux");

describe("ListContainer", () => {
  useSelector.mockImplementation((selector) =>
    selector({
      tasks: [
        { id: 1, title: "통과를 위해 수단과 방법을 가리지 않는다" },
        { id: 2, title: "TDD를 공부한다" },
      ],
    })
  );

  it("render tasks", () => {
    const { container } = render(<ListContainer />);

    expect(container).toHaveTextContent(
      "통과를 위해 수단과 방법을 가리지 않는다"
    );
  });
});
