import React from "react";

import { render } from "@testing-library/react";

import List from "./List";

describe("List", () => {
  it("render tasks", () => {
    const { container } = render(<List />);

    expect(container).toHaveTextContent(
      "통과를 위해 수단과 방법을 가리지 않는다"
    );
  });
});
