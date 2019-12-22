import React from "react";
import { render } from "@testing-library/react";
import Row from "./";

test("renders learn react link", () => {
  const { container } = render(<Row />);
  expect(container.firstChild).toBeInTheDocument();
});
