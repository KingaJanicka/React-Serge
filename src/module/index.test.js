import React from "react";
import { render } from "@testing-library/react";
import Module from "./";

test("renders learn react link", () => {
  const { container } = render(<Module />);
  expect(container.firstChild).toBeInTheDocument();
});
