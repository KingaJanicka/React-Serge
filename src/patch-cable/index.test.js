import React from "react";
import { render } from "@testing-library/react";
import PatchCable from "./";

test("renders learn react link", () => {
    const { container } = render(<PatchCable />);
    expect(container.firstChild).toBeInTheDocument();
});
