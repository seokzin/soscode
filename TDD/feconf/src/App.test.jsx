import React from "react";

import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("render tasks", () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent(
      "통과를 위해 수단과 방법을 가리지 않는다"
    );
  });
});
